import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  photo;
  album;
  editUrl;

  constructor(
      private route: ActivatedRoute,
      private photoService: PhotosService,
      private router: Router
  ){}
  ngOnInit(){
      this.route.paramMap.subscribe((routingParametars) => {
          this.photoService.getPhotoById(+routingParametars.get("id")).subscribe(
              (_res) => {
                console.log(_res);
                  this.photo = _res[0];
                  this.editUrl = `/photos/edit/${this.photo.id}`;
                  this.photoService.getAlbumById(this.photo.albumId).subscribe(
                      (_resAlbum) => {this.album = _resAlbum[0];}
                  );
              }
          );
      });
  }
  removePhotoElement(){
      this.router.navigateByUrl(`/photos/${this.album.id}`)
  }

}
