import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURl: string='https://restcountries.eu/rest/v2';
  findCountry(name: string): Observable<Country[]>{
    const url: string=`${this.apiURl}/name/${name}`;
   
    return this.http.get<Country[]>(url);
  }
  constructor(private http: HttpClient) { }
}
