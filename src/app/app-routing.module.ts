import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForCapitalComponent } from "./countries/pages/for-capital/for-capital.component";
import { ForCountryComponent } from "./countries/pages/for-country/for-country.component";
import { ForRegionComponent } from "./countries/pages/for-region/for-region.component";
import { ViewCountryComponent } from "./countries/pages/view-country/view-country.component";


const routes: Routes=[
    {
        path:'',
        component: ForCountryComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component: ForRegionComponent,
   },
   {
       path:'capital',
       component: ForCapitalComponent
   },
   {
       path:'country/:id',
       component: ViewCountryComponent
   },
   {
       path:'**',
       redirectTo:''
   }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}