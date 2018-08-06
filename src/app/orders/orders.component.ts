import { Component, OnInit } from '@angular/core';
import * as alasql from 'alasql';
import { Observable } from "rxjs";
import { DataService } from '../data.service';
import { Order } from './order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  jsonOrders: Array<Order>;
  orders: Array<Order> = new Array<Order>();
  constructor(private dataService: DataService,
  private router: Router) { }

  async ngOnInit() {
    //console.log("onInit called");
    await this.dataService.getOrders().subscribe(data => {
      //console.log(JSON.stringify(data));
      this.jsonOrders = data;
      for (let order of data) {
        let o = new Order();
        o.copyInto(order);
        this.orders.push(o);
        //console.log(JSON.stringify(order));
      }
    });

    // I don't know if this is really needed because it's
    // already in the orders array.
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
  }

  async sortByOrderNumber() {
    //console.log("sorting by order number");
    this.orders.sort((a, b) => {
      if (a.id > b.id)
        return 1;
      if (a.id < b.id)
        return -1;
      return 0;
    });
  }

  async sortByPrice() {
    //console.log("sorting by price");
    this.orders.sort((a, b) => {
      if (a.unitPrice > b.unitPrice)
        return 1;
      if (a.unitPrice < b.unitPrice)
        return -1;
      return 0;
    });
  }

  onDelete(orderId: number) {
    //console.log("deleting order " + orderId.toString());
    //console.log("length of orders before delete: " + this.orders.length.toString());
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == orderId) {
        this.orders.splice(i, 1);
        this.dataService.deleteOrderByIndex(i);
      }
    }
    //console.log("length of orders after delete: " + this.orders.length.toString());
  }

  addNewOrder() {
    // find the first available order number
    let taken = new Array<number>();
    for (let order of this.orders) {
      taken.push(order.id);
    }
    let id = 1;
    while (taken.indexOf(id) > -1) {
      id++;
    }
    //console.log("Adding new order number " + id.toString());
    let newOrder = new Order();
    newOrder.id = id;
    newOrder.customerName = "customer name";
    newOrder.productCode = "FO-100";
    newOrder.unitsOrdered = 0;
    newOrder.unitPrice = 0;
    newOrder.status = "NEW";
    newOrder.createdAt = new Date();
    newOrder.updatedAt = new Date();
    newOrder.temporary = true;
    this.orders.push(newOrder);
    this.dataService.addOrder(newOrder);
    this.router.navigate(["/edit", id]);
    
  }


} // end of OrdersComponent class