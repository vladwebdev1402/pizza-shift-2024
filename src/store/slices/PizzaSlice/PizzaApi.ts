import { axiosInstance } from '@/api';
import { Pizza } from '@/types';

class PizzaApi {
  static async getCatalog() {
    const response = await axiosInstance.get<{ catalog: Pizza[] }>(
      '/pizza/catalog',
    );
    return response.data;
  }
}

export { PizzaApi };
