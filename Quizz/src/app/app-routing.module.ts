import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RegionesComponent} from '../app/components/regiones/regiones.component';
import {HomeComponent} from '../app/components/home/home.component';
import {Region2Component} from '../app/components/region2/region2.component';
import {Region3Component} from '../app/components/region3/region3.component';
import {ActualizarComponent} from '../app/components/actualizar/actualizar.component';



const routes: Routes = [
 {path:'',component:HomeComponent },
 {path:'region3',component:Region3Component},
 {path:'region2',component:Region2Component},
  {path:'regiones',component:RegionesComponent},
  {path:'actualizar',component:ActualizarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
