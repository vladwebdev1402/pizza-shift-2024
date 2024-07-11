import { axiosInstance } from '@/api';
import { Order, Payment } from '@/types';

class OrderApi {
  static async paymentPizza(payment: Payment) {
    const { data } = await axiosInstance.post<{ order: Order }>(
      '/pizza/payment',
      {
        ...payment,
      },
    );
    return data;
  }

  static async getOrders() {
    const { data } = await axiosInstance.get<{ orders: Order[] }>(
      '/pizza/orders',
    );
    return data;
  }
}

export { OrderApi };
