import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private selected: Subject<Country> = new ReplaySubject<Country>();
  //https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(
      map((countries: any[]) => {
        return countries.map((country) => {
          const [lat, lng] = country.latlng;
          country.lat = lat;
          country.lng = lng;
          return country;
        });
      })
    );
  }

  getSeleted(): Observable<Country> {
    return this.selected.asObservable();
  }

  setSelected(country: Country) {
    this.selected.next(country);
    localStorage.setItem('country', JSON.stringify(country));
  }

  getWeather() {
    let selectedCountry;
    this.getSeleted().subscribe((country) => (selectedCountry = country.name));
    console.log(selectedCountry);
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${selectedCountry}`);
  }
}
