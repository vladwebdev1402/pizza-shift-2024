import { FC } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';

type LoaderProps = {
  className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={clsx(className, style.loader)} />;
};

export { Loader };
