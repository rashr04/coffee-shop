import { FormInitials } from './../../store/components/coffee-customization/form-initials.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  volumes: string[] = ['6','8','12'];
  public form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    const formInitials = {
      volume: '',
      sugar: 1,
      cupCap: true
    } as FormInitials;
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
  }
  close(): void{

  }
  public handleContainerClick(event: MouseEvent): void {
    // prevent event bubbling so that it would not trigger the wrapper's click handler
    event.stopPropagation();
  }
}
