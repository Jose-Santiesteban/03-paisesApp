import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
  `
  button{
    margin-right: 5px
  }
  `
  ]
})
export class ForRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] =[];
  actRegion: string='';
  activeRegion(region: string){
    if(region === this.actRegion){return;}
    this.actRegion  = region;
    this.countries  = [];
    this.countryServices.findRegion(region)
    .subscribe(resp=> this.countries = resp);

  }
 
  getClassCss(region:string){
    
    return (region===this.actRegion) ? 'btn btn-primary': 'btn btn-outline-primary'
  }
  constructor(private countryServices: CountryService) { }

  

}
