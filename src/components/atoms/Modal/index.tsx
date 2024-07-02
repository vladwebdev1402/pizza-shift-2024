import { FC, MouseEvent, ReactNode, useEffect } from 'react';
import clsx from 'clsx';

import CrossSVG from '@/assets/decorative/cross.svg?react';

import style from './style.module.scss';

type ModalProps = {
  size?: 'medium' | 'large';
  isOpen: boolean;
  isWithCross?: boolean;
  isMobileFullScreen?: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({
  size = 'medium',
  isOpen,
  isWithCross = true,
  isMobileFullScreen = false,
  onClose,
  title,
  children,
}) => {
  const onBodyClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (isOpen) {
      body.classList.add(style.stop_scroll);
    } else {
      body.classList.remove(style.stop_scroll);
    }
  }, [isOpen]);

  return (
    <div
      className={clsx(style.modal, {
        [style.modal_open]: isOpen,
        [style.modal_mobileFullScreen]: isMobileFullScreen,
      })}
      onClick={onClose}
    >
      <div
        className={clsx(style.body, {
          [style.body_medium]: size === 'medium',
          [style.body_large]: size === 'large',
        })}
        onClick={onBodyClick}
      >
        <div className={style.title}>
          {title}
          {isWithCross && (
            <button className={style.close} onClick={onClose}>
              <CrossSVG />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export { Modal };
