import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WikiComponent } from './wiki/wiki.component';
import { FlightsComponent } from './flights/flights.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', data: {}, pathMatch: 'full' },
  { path: 'info', component: WikiComponent },
  { path: 'map', component: MapComponent },
  { path: 'flights', component: FlightsComponent},
  { path: 'weather', component: WeatherComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
