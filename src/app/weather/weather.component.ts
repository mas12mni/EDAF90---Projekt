import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weatherType';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  temperatur: any;
  lufttryck: any;
  vindhast: any;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getSeleted().subscribe(this.getWeather.bind(this));
  }

  getWeather(country: Country): void {
    this.countryService.getTemp(country.lat, country.lng).subscribe((vader: Weather) => {
      const param = {
        temperatur: vader.main.temp,
        lufttryck: vader.main.pressure,
        soluppgång: vader.sys.sunrise,
        solnedgång: vader.sys.sunset,
        vindhastighet: vader.wind.speed
      };
      this.temperatur = Math.round(param.temperatur);
      this.lufttryck = param.lufttryck;
      this.vindhast = param.vindhastighet;
    });
  }
}
