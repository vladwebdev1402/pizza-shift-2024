import { axiosInstance } from '@/api';

import { CreateOtpResponse } from './type';

class AuthApi {
  static async createOtp(phone: string) {
    const response = await axiosInstance.post<CreateOtpResponse>('/auth/otp', {
      phone,
    });
    return response.data;
  }
}

export { AuthApi };
