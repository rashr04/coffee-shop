import { Component, EventEmitter, Output } from '@angular/core';
import { OrderItem } from 'src/app/shared/interfaces/order-item.interface';
import { EditCoffeeComponent } from '../edit-coffee/edit-coffee.component';
import { FormInitials } from '../form-initials.interface';
import { UpdateOrderItem } from 'src/app/shared/interfaces/update-order-item.interface';
import { CoffeeService } from 'src/app/store/services/coffee.service';
import { OrderItemService } from 'src/app/shared/services/order-item.service';
import { CustomerGuidService } from 'src/app/shared/services/customer-guid.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-update-coffee',
  templateUrl: '../edit-coffee/edit-coffee.component.html',
  styleUrls: ['../edit-coffee/edit-coffee.component.css'],
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
        animate('0.2s ease-in-out', style({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
      ])
    ])
  ]
})
export class UpdateCoffeeComponent extends EditCoffeeComponent {
  @Output()
  public orderItemUpdated: EventEmitter<OrderItem>;

  private orderItem: OrderItem;

  public constructor(
    coffeeService: CoffeeService,
    orderItemService: OrderItemService,
    customerGuidService: CustomerGuidService
  ) {
    super(coffeeService, orderItemService, customerGuidService);

    this.orderItemUpdated = new EventEmitter<OrderItem>();
    this.buttonText = 'Save';
  }

  public open(orderItem: OrderItem): void {
    this.orderItem =  JSON.parse(JSON.stringify(orderItem));

    const formInitials = {
      volume: orderItem.coffee.volume,
      sugar: orderItem.sugar,
      cupCap: orderItem.cupCap
    } as FormInitials;

    if (this.initModel(orderItem.coffee.volumes, formInitials, orderItem.coffee)) {
      this.show();
    }
  }

  public handleButtonClick(): void {
    this.orderItem.coffee.price = this.price;
    this.orderItem.coffee.volume = this.form.controls.volume.value;
    this.orderItem.sugar = this.form.controls.sugar.value;
    this.orderItem.cupCap = this.form.controls.cupCap.value;
    this.orderItemUpdated.emit(this.orderItem);
    this.close();
  }
}
