import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosService } from './services/photos.service';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';

const routes: Routes = [
  {path:'', component: AlbumsComponent },
  {path:'photos/:albumId', component: PhotosComponent },
  {path: 'photo/:id', component: PhotoDetailsComponent},
  {path: '', redirectTo: '/photos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
