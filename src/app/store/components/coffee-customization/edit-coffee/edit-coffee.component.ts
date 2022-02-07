import { Directive, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coffee } from 'src/app/shared/interfaces/coffee.interface';
import { CustomerGuidService } from 'src/app/shared/services/customer-guid.service';
import { OrderItemService } from 'src/app/shared/services/order-item.service';
import { CoffeeService } from 'src/app/store/services/coffee.service';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';
import { FormInitials } from '../form-initials.interface';

@Directive()
export abstract class EditCoffeeComponent {
  @ViewChild(OverlayComponent)
  public overlay: OverlayComponent;
  @Output()
  public closing: EventEmitter<void>;
  public coffee: Coffee;
  public name: string;
  public image: string;
  public volumes: string[];
  public price: number;
  public form: FormGroup;
  public buttonText: string;
  public isVisible: boolean;

  protected readonly coffeeService: CoffeeService;
  protected readonly orderItemService: OrderItemService;
  protected readonly customerGuidService: CustomerGuidService;

  public constructor(
    coffeeService: CoffeeService,
    orderItemService: OrderItemService,
    customerGuidService: CustomerGuidService
  ) {
    this.coffeeService = coffeeService;
    this.orderItemService = orderItemService;
    this.customerGuidService = customerGuidService;
    this.closing = new EventEmitter<void>();
  }

  public abstract open(obj: any): void;

  public close(): void {
    this.hide();
    this.closing.emit();
  }

  public abstract handleButtonClick(): void;

  public handleContainerClick(event: MouseEvent): void {
    // prevent event bubbling so that it would not trigger the wrapper's click handler
    event.stopPropagation();
  }

  protected show(): void {
    this.overlay.show();
    this.isVisible = true;
  }

  protected hide(): void {
    this.overlay.hide();
    this.isVisible = false;
  }

  protected initModel(volumes: string[], formInitials: FormInitials, coffee: Coffee): boolean {
    this.coffee = JSON.parse(JSON.stringify(coffee));
    if (volumes.length === 0) {
      return false;
    }

    this.name = coffee.name;
    this.image = coffee.image;
    this.volumes = volumes;

    this.form = new FormGroup({
      volume: new FormControl(formInitials.volume, [
        Validators.required
      ]),
      sugar: new FormControl(formInitials.sugar, [
        Validators.required,
        Validators.min(0),
        Validators.max(3)
      ]),
      cupCap: new FormControl(formInitials.cupCap, [
        Validators.required
      ])
    });

    this.form.controls.volume.valueChanges.subscribe(this.updatePrice.bind(this));

    this.updatePrice();

    return true;
  }

  private updatePrice(): void {
    const ind = this.coffee.volumes.findIndex(volume => volume === this.form.controls.volume.value);
    this.coffee.volume = this.form.controls.volume.value;
    this.price = this.coffee.price = this.coffee.prices[ind];
  }
}
