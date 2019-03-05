import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: number;

  constructor(private weatherService : CountryService) { }

  ngOnInit() {
    this.getWeather("Sweden");
  }

  getWeather(countryName): void{
    this.weatherService.getWeather(countryName).subscribe((countries: Country[]) => {
      const [country] = countries;
      let koord = country.latlng;
      console.log(koord);
      this.weatherData = 1;
    })
  }

}
