import { axiosInstance } from '@/api';

import { CreateOtpResponse, SignInData } from './type';
import { User } from '@/types';

class AuthApi {
  static async createOtp(phone: string) {
    const response = await axiosInstance.post<CreateOtpResponse>('/auth/otp', {
      phone,
    });
    return response.data;
  }

  static async userSignin(data: SignInData) {
    const response = await axiosInstance.post<{ user: User; token: string }>(
      '/users/signin',
      data,
    );
    return response.data;
  }
}

export { AuthApi };
