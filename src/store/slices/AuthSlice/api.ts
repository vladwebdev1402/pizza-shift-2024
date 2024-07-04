import { axiosInstance } from '@/api';

import { User } from '@/types';
import { replaceToNumbers } from '@/helpers';

import { CreateOtpResponse, SignInData } from './type';

class AuthApi {
  static async createOtp(phone: string) {
    const { data } = await axiosInstance.post<CreateOtpResponse>('/auth/otp', {
      phone,
    });
    return data;
  }

  static async userSignin(signData: SignInData) {
    const { data } = await axiosInstance.post<{ user: User; token: string }>(
      '/users/signin',
      signData,
    );
    return data;
  }

  static async getSession() {
    const { data } = await axiosInstance.get<{ user: User }>('/users/session');
    return data;
  }

  static async updateProfile(user: User) {
    await axiosInstance.patch('/users/profile', {
      profile: { ...user },
      phone: replaceToNumbers(user.phone),
    });
  }
}

export { AuthApi };
