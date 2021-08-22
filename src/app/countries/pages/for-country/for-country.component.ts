import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

  
  termino: string ="";
  isError: boolean =false;
  countries: Country[]=[];
  find(){
    this.isError = false;
    this.countryService.findCountry(this.termino)
                        .subscribe(countries=>{
                          
                          this.countries=countries;
                          console.log(countries);
                        },err=>{
                          this.isError=true;
                          console.log('Error');
                          console.log(err);
                        });
                          
  }
  constructor(private countryService: CountryService) {

   }

  

}
