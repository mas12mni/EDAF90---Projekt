import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, WikiComponent, NavbarComponent, NotFoundComponent, MapComponent, SidebarComponent, WeatherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BootstrapModule,
    NgSelectModule,
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZWRhZjkwIiwiYSI6ImNqc3EyZmZlNDBxeWE0YW9leDVoMm1kcHcifQ.erez3BSnZLZ2nXO8--V95A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
