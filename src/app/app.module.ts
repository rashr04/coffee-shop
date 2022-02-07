import { CreateProductModule } from './admin/create-product/create-product.module';
import { OrderListModule } from './orders/order-list/order-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from './store/store.module';
import { CheckoutModule } from './checkout/checkout.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    CheckoutModule,
    SharedModule,
    OrderListModule,
    CreateProductModule,
    NoopAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
