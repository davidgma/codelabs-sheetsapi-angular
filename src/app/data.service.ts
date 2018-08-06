import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Order } from './orders/order';

import { JsonOrders } from '../assets/json-orders';

@Injectable()
export class DataService {

  public orders: Array<Order> = new Array<Order>();

  constructor() { 
    let jo = new JsonOrders();
    this.orders = jo.Orders;
    for (let order of this.orders) {
      if (order.temporary == undefined) {
        order.temporary = false;
      }
      //console.log("temp: " + order.temporary.toString());
    }
  }

  public getOrders(): Observable<Array<Order>> {
    // Remove temporary orders. This removes orders where
    // New was called but then cancelled.
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].temporary == true) {
        this.orders.splice(i, 1);
      }
    }
    return of(this.orders);
  }

  public getOrder(id: number): Observable<Order> {
    //console.log("id: " + id.toString());
    //let orders: Array<Order> = jsonOrders;
    let order = this.orders
      .filter((dataItem) => (dataItem.id === id))[0];
    return of(order);
  }

  public addOrder(order: Order) {
    this.orders.push(order);
  }

  public deleteOrderByIndex(index: number) {
    this.orders.splice(index, 1);
  }
}
