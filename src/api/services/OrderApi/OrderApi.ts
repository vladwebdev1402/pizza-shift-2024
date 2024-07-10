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
}

export { OrderApi };
