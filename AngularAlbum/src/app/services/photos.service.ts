import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService   {
  getAlbumById(albumId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums?id=${albumId}`);
  }
  constructor(private http: HttpClient ) { }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  getPhotoById(photoId){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?id=${photoId}`);
  }

}
