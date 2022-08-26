import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';
  private apiV2Url: string = 'https://restcountries.com/v2/';

  get httpParams() {
    return new HttpParams().set('fields','name,capital,flags,population,alpha2Code,cca2');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarByCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarPaisByAlpha( id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarByRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiV2Url}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

}
