import { Coffee } from './coffee.interface';
import { Order } from './order.interface';

export interface OrderItem {
  id: string;
  coffee: Coffee;
  order: Order;
  sugar: number;
  cupCap: boolean;
}
