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

  getWiki(){
    let selectedCountry;
    this.getSeleted().subscribe(country => selectedCountry = country.name)
    let  wikiContentURL = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvprop=content&format=json&origin=*&rvsection=0&titles=${selectedCountry}`
    return this.http.get(wikiContentURL)
  }

}

