import { CheckoutItem } from './../shared/interfaces/checkout-order.interface';
import { OrderItem } from 'src/app/shared/interfaces/order-item.interface';
import { OrderItemService } from 'src/app/shared/services/order-item.service';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutOrder } from '../shared/interfaces/checkout-order.interface';
import { CustomerGuidService } from '../shared/services/customer-guid.service';
import { OrderService } from '../shared/services/order.service';
import { ThanksComponent } from './components/thanks/thanks.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @ViewChild(ThanksComponent)
  public thanks: ThanksComponent;

  private readonly orderService: OrderService;
  private readonly customerGuidService: CustomerGuidService;
  private readonly router: Router;

  public constructor(
    orderService: OrderService,
    private orderItemService: OrderItemService,
    customerGuidService: CustomerGuidService,
    router: Router
  ) {
    this.orderService = orderService;
    this.customerGuidService = customerGuidService;
    this.router = router;
  }

  hasItems(): boolean {
    return this.orderItemService.items.length > 0;
  }

  private handleSubmitSuccess() {
    this.orderItemService.items = [];
    this.thanks.show();
  }

  public processItem(item: OrderItem): CheckoutItem {
    return {
      id: item.id,
      name: item.coffee.name,
      sugar: item.sugar,
      cupCap: item.cupCap,
      volume: item.coffee.volume,
      price: item.coffee.price,
    } as CheckoutItem;
  }

  private getTotal(): number {
    return this.orderItemService.getTotal();
  }

  public submit(form: FormGroup): void {
    const checkoutOrder = {
      orderDate: new Date().toDateString(),
      orderTotal: this.getTotal(),
      status: 'processing',
      customerName: form.controls.customerName.value,
    } as CheckoutOrder;

    if (form.controls.customerPhone.value !== null) {
      checkoutOrder.customerPhone =
        form.controls.customerPhone.value.toString();
    }
    checkoutOrder.id = new Date().valueOf().toString();
    checkoutOrder.items = this.orderItemService.items.map((item) =>
      this.processItem(item)
    );
    this.orderService
      .submitOrder(checkoutOrder)
      .subscribe((_) => this.handleSubmitSuccess());
  }
}
