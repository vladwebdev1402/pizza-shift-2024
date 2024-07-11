import { FC, ReactNode } from 'react';

import { Button, ButtonProps, Typography } from '@/components/atoms';

import style from './style.module.scss';

type MobileTitleButtonProps = {
  icon: ReactNode;
} & ButtonProps;

const MobileTitleButton: FC<MobileTitleButtonProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <Button className={style.button} {...props} variant="text">
      <div className="icon">{icon}</div>
      <Typography variant="h2" tag="h2">
        {children}
      </Typography>
    </Button>
  );
};

export { MobileTitleButton };
