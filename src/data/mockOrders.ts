import { Order } from '../types';

export const mockOrders: Order[] = [
  {
    orderId: 'order_1',
    userId: 'user_1',
    productIds: [1, 5, 10],
    orderDate: '2025-01-15T10:30:00.000Z',
  },
  {
    orderId: 'order_2',
    userId: 'user_2',
    productIds: [3, 12, 17],
    orderDate: '2025-02-20T14:45:00.000Z',
  },
  {
    orderId: 'order_3',
    userId: 'user_3',
    productIds: [5, 8, 15],
    orderDate: '2025-03-10T09:15:00.000Z',
  },
];
