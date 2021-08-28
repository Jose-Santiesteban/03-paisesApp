import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

   country!:  Country;
  constructor(  
              private activatedRoute: ActivatedRoute,
              private countryServce: CountryService
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countryServce.getCountryAlpha(id)),
      tap(console.log)
    )    
    .subscribe(resp=>{
        this.country=resp;
        
        });
    
    // this.activatedRoute.params                
    //                   .subscribe(({id})=>{
    //                   console.log(id);//params.id
    // this.countryServce.getCountryAlpha(id)
    //                     .subscribe(country=>{
    //                       console.log(country);
    //                     })

    }   
  }


