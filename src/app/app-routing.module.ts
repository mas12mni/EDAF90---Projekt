import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: '', redirectTo: '/map/Sweden', data: {}, pathMatch: 'full' },
  { path: 'info/:name', component: WikiComponent },
  { path: 'map/:name', component: MapComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
