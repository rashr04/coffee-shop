import { CheckoutOrder } from './../../shared/interfaces/checkout-order.interface';
import { OrderService } from './../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: CheckoutOrder[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }
}
