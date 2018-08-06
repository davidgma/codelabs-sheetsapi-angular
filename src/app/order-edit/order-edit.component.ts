import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Order } from '../orders/order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order: Order; // the original
  editedOrder: Order = new Order(); // the edited version
  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    //console.log("params: " + this.route.params == null)
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        //console.log("params id: " + params['id']);
        let id = +params['id'];
        //console.log("params id: " + id.toString());
        this.dataService.getOrder(id)
            .subscribe((order) => {
              this.order = order;
              this.editedOrder.copyInto(order)
              });
      } 
    });
  }

  onSubmit() {
    //console.log("Saving order... " + JSON.stringify(this.editedOrder));
    this.order.id = this.editedOrder.id;
    this.order.customerName = this.editedOrder.customerName;
    this.order.productCode = this.editedOrder.productCode;
    this.order.unitsOrdered = this.editedOrder.unitsOrdered;
    this.order.unitPrice = this.editedOrder.unitPrice;
    this.order.status = this.editedOrder.status;
    this.order.updatedAt = new Date();
    this.order.temporary = false;
    //console.log("form: " + JSON.stringify(form.value))
  }

}