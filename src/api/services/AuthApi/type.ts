type CreateOtpResponse = {
  success: boolean;
  reason: string;
  retryDelay: number;
};

type SignInData = {
  phone: string;
  code: number;
};

export type { CreateOtpResponse, SignInData };
