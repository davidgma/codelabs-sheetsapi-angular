import { Component, OnInit } from '@angular/core';
import * as alasql from 'alasql';
import { Observable } from "rxjs";
//import { parse } from 'alasql';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sheets API Angular Version';

}
