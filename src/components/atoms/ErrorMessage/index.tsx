import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';
import { Typography } from '../Typography';

type ErrorMessageProps = {
  title: string;
  description: string;
  className?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ title, description, className }) => {
  return (
    <div className={clsx(style.container, className)}>
      <Typography variant="h2" tag="h2">
        {title}
      </Typography>
      <Typography className={style.description}>{description}</Typography>
    </div>
  );
};

export { ErrorMessage };
