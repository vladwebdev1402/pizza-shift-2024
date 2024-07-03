import { FC } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';

type LoaderProps = {
  className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={clsx(style.loader, className)} />;
};

export { Loader };
