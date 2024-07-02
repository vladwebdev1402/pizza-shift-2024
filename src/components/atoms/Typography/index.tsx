import { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

import style from './style.module.scss';

type TypographyVariants =
  | 'h2'
  | 'h3'
  | 'paragraph_16'
  | 'paragraph_14'
  | 'paragraph_12';

type TypographyTags = 'h1' | 'h2' | 'h3' | 'div' | 'p' | 'span';

type TypographyProps<Tag extends TypographyTags> = ComponentProps<Tag> & {
  variant?: TypographyVariants;
  tag?: TypographyTags;
  children: ReactNode;
};

const Typography = <Tag extends TypographyTags = 'div'>({
  className = '',
  variant = 'paragraph_16',
  tag: Tag = 'p',
  children,
}: TypographyProps<Tag>) => {
  return <Tag className={clsx(className, style[variant])}>{children}</Tag>;
};

export { Typography };
