import { Component, OnInit } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import * as alasql from 'alasql';
import { Observable } from "rxjs";
//import { parse } from 'alasql';
import { DataService } from '../data.service';

@Component({
  //selector: 'app-alasql-demo',
  templateUrl: './alasql-demo.component.html',
  styleUrls: ['./alasql-demo.component.css']
})
export class AlasqlDemoComponent implements OnInit {

  constructor(private dataService: DataService, public router: Router) { }
  comments: Array<string> = new Array<string>("initializing...");
  cities: Array<string> = new Array<string>();
  jsonOrders: any; // a Json object with the orders



  async ngOnInit() {

    await alasql.promise(
      "DROP TABLE IF EXISTS cities")
      .then((res) => {
        this.comments.push('Return from create table: ' + res.toString());
      });

    await alasql.promise(
      "CREATE TABLE cities (city string, population number)")
      .then((res) => {
        this.comments.push('Return from create table: ' + res.toString());
      });

    await alasql.promise("INSERT INTO cities VALUES ('Rome',2863224),('Paris',2249975),('Berlin',3517424),('Madrid',3041579)").then((res) => {
      this.comments.push('Return from insert: ' + res.toString());
    });

    await alasql.promise("SELECT * FROM cities WHERE population < 3500000 ORDER BY population DESC").then((res) => {
      this.comments.push('Return from select: ' + JSON.stringify(res));
      for (let i = 0; i < res.length; i++) {
        let obj: Object = res[i];
        this.cities.push(obj["city"] + " (population " + obj["population"]
          + ")");
      }
    });

    await this.dataService.getOrders().subscribe(data => {
      this.jsonOrders = data;
    });

    await alasql.promise("drop table if exists t_orders");
    await alasql.promise("create table t_orders ("
      + "id int NOT NULL PRIMARY KEY, "
      + "customerName string, "
      + "productCode string, "
      + "unitsOrdered int, "
      + "unitPrice number, "
      + "status string, "
      + "createdAt date, "
      + "updatedAt date)"
    );
    await alasql.promise("insert into t_orders select * from ?", [this.jsonOrders]);

    //await alasql.promise("SELECT customerName FROM ?", [this.jsonOrders])
    let fieldName = "customerName";
    await alasql.promise("SELECT " + fieldName + " FROM t_orders")
    .then((res) => {
      this.comments.push('Return from select: ' + JSON.stringify(res));
      for (let i = 0; i < res.length; i++) {
        let obj: Object = res[i];
        this.cities.push(obj[fieldName]);
      }
    });

    this.comments.push("here2");
  }
 

}