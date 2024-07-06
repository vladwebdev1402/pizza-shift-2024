import { axiosInstance } from '@/api';
import { Pizza } from '@/types';

class PizzaApi {
  static async getCatalog() {
    const { data } = await axiosInstance.get<{ catalog: Pizza[] }>(
      '/pizza/catalog',
    );
    return data;
  }
}

export { PizzaApi };
