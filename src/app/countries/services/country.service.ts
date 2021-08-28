import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURl: string='https://restcountries.eu/rest/v2';
  get httpParams () {
    return new HttpParams().set( 'fields','name;capital;alpha2Code;flag;population' );
  }

  findCountry(name: string): Observable<Country[]>{
    const url: string=`${this.apiURl}/name/${name}`;
   
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
  findCapital(name: string): Observable<Country[]>{
    const url: string=`${this.apiURl}/capital/${name}`;
   
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
  getCountryAlpha(id: string): Observable<Country>{
    const url: string=`${this.apiURl}/alpha/${id}`;
   
    return this.http.get<Country>(url);
  }
  findRegion(region: string):Observable<Country[]>{
    const url: string=`${this.apiURl}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
  constructor(private http: HttpClient) { }
}
