import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';
import { Weather } from './weatherType';
import { Airport } from './Airport';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private selected: Subject<Country> = new ReplaySubject<Country>();

  constructor(private http: HttpClient) { }

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

  getTemp(lat: number, lng: number): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c6ebd2ddedb605dc085983f4d8aaec2`
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

  getWiki(countryName: string) {
    return this.http.get(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvprop=content&format=json&origin=*&rvsection=0&titles=${countryName}`
    );
  }

  getFlightsService(lat: number, lng: number): Observable<Airport[]> {
    //navigator.geolocation.getCurrentPosition(console.log);
    console.log(lat);
  return this.http.get<Airport[]>('https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius', { params: {radius: '100', lng: `${lng}`, lat: `${lat}`}, headers: { 'X-RapidAPI-Key': 'ac2182d6f9msh39913face632fa5p1b69b2jsn73e3384b85aa' } });

  }
}
