import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private selected: Subject<Country> = new ReplaySubject<Country>();

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountry(countryName: string): void {
    this.http
      .get<Country[]>(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .subscribe((countries: Country[]) => {
        const [country] = countries;
        this.setSelected(country);
      });
  }

  getSeleted(): Observable<Country> {
    return this.selected.asObservable();
  }

  setSelected(country: Country) {
    this.selected.next(country);
  }

  getWeather(countryName: string) {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${countryName}`);
  }
}
