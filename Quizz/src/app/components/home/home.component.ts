import { Component, OnInit } from '@angular/core';
import {Dias,ListaDias} from '../../interfaces/dias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Lista=ListaDias;
  constructor() { }

  ngOnInit(): void {
  }

}
