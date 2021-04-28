import { Component, OnInit } from '@angular/core';
import {Dias2,ListaDias} from '../../interfaces/dias2';

@Component({
  selector: 'app-region2',
  templateUrl: './region2.component.html',
  styleUrls: ['./region2.component.scss']
})
export class Region2Component implements OnInit {
  Lista2=ListaDias;
  constructor() { }

  ngOnInit(): void {
  }

}
