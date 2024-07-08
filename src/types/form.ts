import { ReactNode } from 'react';

type FormProps<T> = {
  defaultValues?: T;
  className?: string;
  onSubmit: (data: T) => void;
  children?: ReactNode;
};

export type { FormProps };
