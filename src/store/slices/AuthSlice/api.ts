import { axiosInstance } from '@/api';

import { User } from '@/types';
import { replaceToNumbers } from '@/helpers';

import { CreateOtpResponse, SignInData } from './type';

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

  static async getSession() {
    const response = await axiosInstance.get<{ user: User }>('/users/session');
    return response.data;
  }

  static async updateProfile(user: User) {
    await axiosInstance.patch('/users/profile', {
      profile: { ...user },
      phone: replaceToNumbers(user.phone),
    });
  }
}

export { AuthApi };
