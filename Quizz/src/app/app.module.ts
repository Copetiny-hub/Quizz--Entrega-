import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegionesComponent } from './components/regiones/regiones.component';
import { HomeComponent } from './components/home/home.component';
import { Region2Component } from './components/region2/region2.component';
import { Region3Component } from './components/region3/region3.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegionesComponent,
    HomeComponent,
    Region2Component,
    Region3Component,
    ActualizarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    MatSelectModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
