import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiContentService {
  constructor(private http: HttpClient) {}
  getAbstract(country: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.eu/rest/v2/name/${country}`);
  }
  getFlag(): Observable<any> {
    return this.http.get<any>('https://restcountries.eu/rest/v2/name/eesti');
  }
}
