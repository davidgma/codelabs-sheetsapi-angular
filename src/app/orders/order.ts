export class Order {
  id: number;
  customerName: string;
  productCode: string;
  unitsOrdered: number;
  unitPrice: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  temporary: boolean = false;

  public copyInto(order: Order) {
    this.id = order.id;
    this.customerName = order.customerName;
    this.productCode = order.productCode;
    this.unitsOrdered = order.unitsOrdered;
    this.unitPrice = order.unitPrice;
    this.status = order.status;
    this.createdAt = order.createdAt;
    this.updatedAt = order.updatedAt;
    this.temporary = order.temporary;
  }
}