import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coffee } from '../../../shared/interfaces/coffee.interface';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  @Output() public coffeeClicked: EventEmitter<Coffee>;
  public coffees: Coffee[];

  private readonly coffeeService: CoffeeService;

  public constructor(productService: CoffeeService) {
    this.coffeeService = productService;
    this.coffeeClicked = new EventEmitter<Coffee>();
    this.coffees = null;
  }

  public ngOnInit(): void {
    this.coffeeService.getAllForDisplay()
      .subscribe(coffees => this.coffees = coffees);
  }

  public handleClick(product: Coffee): void {
    this.coffeeClicked.emit(product);
  }
}
