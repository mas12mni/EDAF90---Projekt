import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { }

  getWeather(countryName: string) {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${countryName}`);
  }





}
