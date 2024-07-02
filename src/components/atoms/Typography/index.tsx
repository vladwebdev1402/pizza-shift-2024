import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import style from './style.module.scss';

type TypographyVariants =
  | 'h2'
  | 'h3'
  | 'paragraph_16'
  | 'paragraph_14'
  | 'paragraph_12';

type TypographyColors =
  | 'title'
  | 'invert'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quartenery'
  | 'body-primary';

type TypographyWeights = 'regular' | 'medium' | 'semibold' | 'bold';

type TypographyProps = {
  variant?: TypographyVariants;
  color?: TypographyColors;
  weight?: TypographyWeights;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  children: ReactNode;
};

const Typography: FC<TypographyProps> = ({
  variant = 'paragraph_16',
  color = 'primary',
  weight = 'regular',
  tag = 'p',
  children,
}) => {
  const Tag = tag;

  return (
    <Tag className={clsx(style[variant], style[color], style[weight])}>
      {children}
    </Tag>
  );
};

export { Typography };
