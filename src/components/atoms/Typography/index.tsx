import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import style from './style.module.scss';

type TypographyVariants =
  | 'h2'
  | 'h3'
  | 'paragraph_16'
  | 'paragraph_14'
  | 'paragraph_12';

type TypographyProps = {
  className?: string;
  variant?: TypographyVariants;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  children: ReactNode;
};

const Typography: FC<TypographyProps> = ({
  className = '',
  variant = 'paragraph_16',
  tag: Tag = 'p',
  children,
}) => {
  return <Tag className={clsx(className, style[variant])}>{children}</Tag>;
};

export { Typography };
