import { FC } from 'react';

import { Button, Modal, Typography } from '@/components/atoms';

import style from './style.module.scss';

type OrderCancelModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
};

const OrderCancelModal: FC<OrderCancelModalProps> = ({ isOpen, onCancel, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={style.icon_wrapper}>
        <div className={style.icon}>?</div>
      </div>
      <Typography className={style.cancel_title} variant="h3" tag="h3">
        Отменить заказ?
      </Typography>
      <div className={style.buttons}>
        <Button variant="outlined" onClick={onCancel}>
          Отменить
        </Button>
        <Button onClick={onClose}>Не отменять</Button>
      </div>
    </Modal>
  );
};

export { OrderCancelModal };
