import { OrderItem } from 'src/app/shared/interfaces/order-item.interface';
export interface CheckoutItem {
  id: string;
  sugar: number;
  cupCap: boolean;
  volume: string;
  name: string;
  price: number;
}

export interface CheckoutOrder {
  id: string;
  status: string;
  orderDate: string;
  orderTotal: number;
  customerName: string;
  customerPhone?: string;
  items?: CheckoutItem[];
}
