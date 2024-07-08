import { FC } from 'react';

import { Button, Modal, Typography } from '@/components/atoms';
import { Address, PizzaBasket } from '@/types';
import { calcPriceBasket } from '@/helpers';
import AcceptIcon from '@/assets/decorative/accept.svg?react';

import { getPizzaInformation } from './helpers';
import style from './style.module.scss';

type PaymentInformationModalProps = {
  basket: PizzaBasket[];
  receiverAddress: Address;
  isOpen: boolean;
  onClose: () => void;
};

const PaymentInformationModal: FC<PaymentInformationModalProps> = ({
  basket,
  receiverAddress,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isMobileFullScreen>
      <div className={style.accept}>
        <div className={style.icon}>
          <AcceptIcon />
        </div>
      </div>
      <Typography className={style.payment_title} variant="h2" tag="h2">
        Оплата прошла успешно!
      </Typography>
      <div className={style.payment}>
        <div>
          <Typography variant="paragraph_12" className={style.subtitle}>
            Заказ
          </Typography>
          {basket.map((pizza) => (
            <Typography>{getPizzaInformation(pizza)}</Typography>
          ))}
        </div>
        <div>
          <Typography variant="paragraph_12" className={style.subtitle}>
            Адрес доставки
          </Typography>
          {receiverAddress && (
            <Typography>
              {receiverAddress.street} {receiverAddress.house}{' '}
              {receiverAddress.apartment}
            </Typography>
          )}
        </div>
        <div>
          <Typography variant="paragraph_12">Сумма заказа</Typography>
          <Typography>{calcPriceBasket(basket)} ₽</Typography>
        </div>
        <Typography variant="paragraph_14" className={style.sms}>
          Вся информация была продублирована в SMS
        </Typography>
      </div>
      <div className={style.button_container}>
        <Button className={style.button} variant="text">
          Перейти в главное меню
        </Button>
      </div>
    </Modal>
  );
};

export { PaymentInformationModal };
