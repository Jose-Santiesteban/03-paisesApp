import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})
export class ForCapitalComponent implements OnInit {

  constructor(private countryService: CountryService) { }
  countries: Country[]=[];
  isError: boolean= false;
  termino:string='';
  ngOnInit(): void {
  }
  findCapital(term: string){
   this.isError = false;
   this.termino=term;
   this.countryService.findCapital(this.termino)
                      .subscribe(resp=>{
                        console.log(resp);
                        this.countries=resp;
                      });
  }
}
