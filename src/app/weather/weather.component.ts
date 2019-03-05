import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { HttpClient } from '@angular/common/http';
import {Weather} from '../weatherType';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  temperatur: any;
  lufttryck: any;
  vindhast: any;

  constructor(private weatherService : CountryService,
              private http: HttpClient,
              ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void{
    this.weatherService.getWeather().subscribe((countries: Country[]) => {
      const [country] = countries;
      let koord = country.latlng;
      this.getTemp(koord);
    })
  }

  getTemp(koordinates){
    this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?lat=${koordinates[0]}&lon=${koordinates[1]}&appid=0c6ebd2ddedb605dc085983f4d8aaec2`)
    .subscribe((vader: Weather) => {
      let param = {
        temperatur : vader.main.temp , 
        lufttryck : vader.main.pressure , 
        soluppgång : vader.sys.sunrise ,
        solnedgång : vader.sys.sunset ,
        vindhastighet : vader.wind.speed
    }
      this.temperatur = Math.round(param.temperatur);
      this.lufttryck = param.lufttryck;
      this.vindhast = param.vindhastighet;
    })
  }

}
