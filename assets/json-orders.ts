import { Order } from '../app/orders/order';
export class JsonOrders {
    public Orders: Array<Order> = new Array<Order>();
    private jsonOrders = [
        { "id": 1, "customerName": "Alice's Antiques", "productCode": "FOO-100", "unitsOrdered": 25, "unitPrice": 12.5, "status": "DELIVERED", "createdAt": "2016-05-09 14:39:12.849 +00:00", "updatedAt": "2016-05-09 15:15:15.922 +00:00" },
        { "id": 2, "customerName": "Bob's Brewery", "productCode": "FOO-200", "unitsOrdered": 60, "unitPrice": 18.75, "status": "SHIPPED", "createdAt": "2016-05-09 14:40:01.495 +00:00", "updatedAt": "2016-05-09 15:15:07.999 +00:00" },
        { "id": 3, "customerName": "Carol's Car Wash", "productCode": "FOO-100", "unitsOrdered": 100, "unitPrice": 9.25, "status": "SHIPPED", "createdAt": "2016-05-09 14:40:43.407 +00:00", "updatedAt": "2016-05-09 15:15:24.847 +00:00" },
        { "id": 4, "customerName": "David's Dog Grooming", "productCode": "FOO-250", "unitsOrdered": 15, "unitPrice": 29.95, "status": "PENDING", "createdAt": "2016-05-09 14:41:33.081 +00:00", "updatedAt": "2016-05-09 14:41:33.081 +00:00" },
        { "id": 5, "customerName": "Elizabeth's Eatery", "productCode": "FOO-100", "unitsOrdered": 35, "unitPrice": 10.95, "status": "PENDING", "createdAt": "2016-05-09 14:43:12.990 +00:00", "updatedAt": "2016-05-09 14:43:12.990 +00:00" }
    ];

    constructor() {
        for (let jo of this.jsonOrders) {
            let o = new Order();
            o.id = jo.id;
            o.customerName = jo.customerName;
            o.productCode = jo.productCode
            o.unitsOrdered = jo.unitsOrdered;
            o.unitPrice = jo.unitPrice;
            o.status = jo.status;
            o.createdAt = new Date(jo.createdAt);
            o.updatedAt = new Date(jo.updatedAt);
            o.temporary = false;
            this.Orders.push(o);
        }

    }

}

/*

[
{"id":1,"customerName":"Alice's Antiques","productCode":"FOO-100","unitsOrdered":25,"unitPrice":12.5,"status":"DELIVERED","createdAt":"2016-05-09 14:39:12.849 +00:00","updatedAt":"2016-05-09 15:15:15.922 +00:00"},
{"id":2,"customerName":"Bob's Brewery","productCode":"FOO-200","unitsOrdered":60,"unitPrice":18.75,"status":"SHIPPED","createdAt":"2016-05-09 14:40:01.495 +00:00","updatedAt":"2016-05-09 15:15:07.999 +00:00"},
{"id":3,"customerName":"Carol's Car Wash","productCode":"FOO-100","unitsOrdered":100,"unitPrice":9.25,"status":"SHIPPED","createdAt":"2016-05-09 14:40:43.407 +00:00","updatedAt":"2016-05-09 15:15:24.847 +00:00"},
{"id":4,"customerName":"David's Dog Grooming","productCode":"FOO-250","unitsOrdered":15,"unitPrice":29.95,"status":"PENDING","createdAt":"2016-05-09 14:41:33.081 +00:00","updatedAt":"2016-05-09 14:41:33.081 +00:00"},
{"id":5,"customerName":"Elizabeth's Eatery","productCode":"FOO-100","unitsOrdered":35,"unitPrice":10.95,"status":"PENDING","createdAt":"2016-05-09 14:43:12.990 +00:00","updatedAt":"2016-05-09 14:43:12.990 +00:00"}
]

,"customerName":"Alice's Antiques","productCode":"FOO-100","unitsOrdered":25,"unitPrice":12.5,"status":"DELIVERED","createdAt":1462804752849,"updatedAt":1462806915922,"temporary":false



    */