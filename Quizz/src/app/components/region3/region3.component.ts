import { Component, OnInit } from '@angular/core';
import {Dia3,ListaDias} from '../../interfaces/dia3';

@Component({
  selector: 'app-region3',
  templateUrl: './region3.component.html',
  styleUrls: ['./region3.component.scss']
})
export class Region3Component implements OnInit {
  Lista3=ListaDias;
  constructor() { }

  ngOnInit(): void {
  }

}
