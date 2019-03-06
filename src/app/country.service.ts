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

  getWiki(){
    let selectedCountry;
    this.getSeleted().subscribe(country => selectedCountry = country.name)
    let  wikiContentURL = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvprop=content&format=json&origin=*&rvsection=0&titles=${selectedCountry}`
    return this.http.get(wikiContentURL)
  }

}

