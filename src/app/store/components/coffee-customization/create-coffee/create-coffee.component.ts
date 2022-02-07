import { OrderItem } from './../../../../shared/interfaces/order-item.interface';
import { Coffee } from './../../../../shared/interfaces/coffee.interface';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { CreateOrderItem } from 'src/app/shared/interfaces/create-order-item.interface';
import { CustomerGuidService } from 'src/app/shared/services/customer-guid.service';
import { OrderItemService } from 'src/app/shared/services/order-item.service';
import { CoffeeService } from 'src/app/store/services/coffee.service';
import { EditCoffeeComponent } from '../edit-coffee/edit-coffee.component';
import { FormInitials } from '../form-initials.interface';

@Component({
  selector: 'app-create-coffee',
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
export class CreateCoffeeComponent extends EditCoffeeComponent {
  @Output()
  public orderItemCreated: EventEmitter<OrderItem>;

  private isWaitingForResponse: boolean;

  public constructor(
    coffeeService: CoffeeService,
    orderItemService: OrderItemService,
    customerGuidService: CustomerGuidService
  ) {
    super(coffeeService, orderItemService, customerGuidService);

    this.orderItemCreated = new EventEmitter<OrderItem>();
    this.buttonText = 'Add to order';
    this.isWaitingForResponse = false;
  }

  public open(coffee: Coffee): void {
    this.coffee = coffee;
    const formInitials = {
      volume: coffee.volumes.length > 0 ? coffee.volumes[0] : '',
      sugar: 1,
      cupCap: true
    } as FormInitials;

    if (this.initModel(coffee.volumes, formInitials, this.coffee)) {
      this.show();
    }
  }

  public handleButtonClick(): void {
    const newOrderItem = {
      coffee: this.coffee,
      sugar: this.form.controls.sugar.value,
      cupCap: this.form.controls.cupCap.value
    } as OrderItem;

    this.close();
      this.isWaitingForResponse = false;
      this.orderItemCreated.emit(newOrderItem);
  }
}
