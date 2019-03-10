import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private selected: Subject<Country> = new ReplaySubject<Country>();

  constructor(private http: HttpClient) { }

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

  async getFlightsService() {
    console.log("servicen funkar");
    const token = this.getAccesTokenAmadeus();
    const resp: any = await this.http.get('https://test.api.amadeus.com/v1/shopping/flight-destinations', { params: {origin: 'MAD'}, headers: { 'Authorization': `Bearer ${token}` } }).toPromise();
    console.log(resp);

    //return this.http.post('https://test.api.amadeus.com/v1/security/oauth2/token', 'grant_type=client_credentials&client_id=3skhuxM062gDguv5l6WKGJ83lrmF6ZaR&client_secret=7T6h0yKTtNGHbfPP', { headers: {'Content-Type': 'application/x-www-form-urlencoded' }})

  }

  async getAccesTokenAmadeus() {
    const resp: any = await this.http.post('https://test.api.amadeus.com/v1/security/oauth2/token', 'grant_type=client_credentials&client_id=3skhuxM062gDguv5l6WKGJ83lrmF6ZaR&client_secret=7T6h0yKTtNGHbfPP', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).toPromise();
    console.log(resp.access_token);
    return resp.access_token;
  }

}
