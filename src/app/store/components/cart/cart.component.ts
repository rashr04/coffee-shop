import { Coffee } from 'src/app/shared/interfaces/coffee.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerGuidService } from 'src/app/shared/services/customer-guid.service';
import { OrderItem } from '../../../shared/interfaces/order-item.interface';
import { OrderItemService } from '../../../shared/services/order-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() public itemClicked: EventEmitter<OrderItem>;
  public totalPrice: number;
  public isVisible: boolean;

  private readonly orderItemService: OrderItemService;
  private readonly customerGuidService: CustomerGuidService;

  public constructor(
    orderItemService: OrderItemService,
    customerGuidService: CustomerGuidService
  ) {
    this.orderItemService = orderItemService;
    this.customerGuidService = customerGuidService;
    this.itemClicked = new EventEmitter<OrderItem>();
    this.totalPrice = 0;
    this.isVisible = this.orderItemService.items.length > 0;
  }

  public ngOnInit(): void {
    this.updateTotalPrice();
  }

  public updateItems(orderItem: OrderItem): void {
    const itemIndex = this.orderItemService.items.findIndex(item => item.id === orderItem.id);
    this.orderItemService.items[itemIndex] = orderItem;
    this.updateTotalPrice();
    this.isVisible = true;
  }

  public addItem(coffee: OrderItem): void {
    coffee.id = new Date().valueOf().toString();
    this.orderItemService.items.push(coffee);
    this.updateTotalPrice();
    this.isVisible = true;
  }

  public removeItem(id: string): void {

    const ind = this.orderItemService.items.findIndex(item => item.id === id);
    this.orderItemService.items.splice(ind, 1);
  }

  public getItems(): OrderItem[] {
    return this.orderItemService.items;
  }

  public handleItemClick(item: OrderItem): void {
    this.itemClicked.emit(item);
  }

  private updateTotalPrice(): void {
    this.totalPrice = this.orderItemService.getTotal();
  }
}
