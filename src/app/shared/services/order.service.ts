import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CheckoutOrder } from '../interfaces/checkout-order.interface';
import { CreateOrder } from '../interfaces/create-order.interface';
import { Order } from '../interfaces/order.interface';

@Injectable()
export class OrderService {
  private readonly http: HttpClient;
  private readonly url: string;

  public constructor(http: HttpClient) {
    this.http = http;
    this.url = `/api/orders`;
  }

  public getByCustomerGuid(customerGuid: string): Observable<Order> {
    const url = `${this.url}`;
    return this.http.get<Order[]>(url).pipe(
      map(orders => orders[0])
    );
  }

  public addForCustomerGuid(customerGuid: string): Observable<Order> {
    const newOrder = { customerGuid } as CreateOrder;
    return this.http.post<Order>(this.url, newOrder);
  }

  public addIfNotExist(customerGuid: string): Observable<any> {
    return this.existsByCustomerGuid(customerGuid).pipe(
      switchMap(exists => {
        if (!exists) {
          return this.addForCustomerGuid(customerGuid);
        } else {
          return of(null);
        }
      }));
  }

  public existsByCustomerGuid(customerGuid: string): Observable<boolean> {
    const url = `${this.url}`;
    return this.http.head(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => +response.headers.get('Content-Length') > 0)
    );
  }

  public getOrders(): Observable<CheckoutOrder[]> {
    const url = `${this.url}`;
    return this.http.get<CheckoutOrder[]>(url);
  }
  public submitOrder(checkoutOrder: CheckoutOrder): Observable<any> {
    const url = `${this.url}`;
    return this.http.post(url, checkoutOrder);
  }
}
