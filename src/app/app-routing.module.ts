import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', data: {}, pathMatch: 'full' },
  { path: 'info', component: WikiComponent },
  { path: 'map', component: MapComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
