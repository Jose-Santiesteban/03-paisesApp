import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  `
  li {
    cursor: pointer; 
  }
  `
  ]
})
export class ForCountryComponent {

  
  termino: string ="";
  isError: boolean =false;
  countries: Country[]=[];
  sugCountries: Country[]=[];
  showSug: boolean = false;

  find( term: string){
    this.showSug = false;
    this.isError = false;
    this.termino=term;
    this.countryService.findCountry(this.termino)
                        .subscribe(countries=>{
                          
                          this.countries=countries;
                          console.log(countries);
                        },err=>{
                          this.isError=true;
                          console.log('Error');
                          this.countries=[];
                        });
                          
  }
  sug(term: string){
    this.showSug=true;
   this.isError=false;
   this.termino=term;
   this.countryService.findCountry(term)
        .subscribe(resp=> this.sugCountries=resp.splice(0,5),
        (err)=> this.sugCountries = []
        );

    
  }
  
  
  
  constructor(private countryService: CountryService) {

   }

  

}
