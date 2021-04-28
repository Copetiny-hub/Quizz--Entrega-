import { Component, OnInit } from '@angular/core';
import {Dias,ListaDias} from '../../interfaces/dias';


@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss']
})
export class RegionesComponent implements OnInit {
  Lista=ListaDias;
 
  constructor() { }

  ngOnInit(): void {
  }

}
