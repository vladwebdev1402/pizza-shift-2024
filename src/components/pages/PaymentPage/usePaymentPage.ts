import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ROUTER_PATHS } from '@/constants';
import {
  AuthActions,
  OrderActions,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { Address, DebitCard, Person, User } from '@/types';

const usePaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const [isShowOrder, setIsShowOrder] = useState(false);
  const { isFetchLoading, user } = useAppSelector((state) => state.AuthReducer);
  const { basket, isPayLoading } = useAppSelector(
    (state) => state.OrderReducer,
  );
  const [personInfo, setPersonInfo] = useState<{
    person?: Person;
    receiverAddress?: Address;
  }>({});

  const onBackPage = () => {
    navigate(ROUTER_PATHS.basket);
  };

  const goToMainPage = () => {
    navigate(ROUTER_PATHS.main);
    dispatch(OrderActions.clearBasket());
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const onProfileSubmit = (profile: User) => {
    setPersonInfo({ ...personInfo, person: profile });
    setStep(2);
  };

  const onAddressSubmit = (address: Address) => {
    setPersonInfo({ ...personInfo, receiverAddress: address });
    setStep(3);
  };

  const onCardSubmit = async (debitCard: DebitCard) => {
    if (
      personInfo.person !== undefined &&
      personInfo.receiverAddress !== undefined
    ) {
      const response = await dispatch(
        OrderActions.paymentPizza({
          person: personInfo.person,
          receiverAddress: personInfo.receiverAddress,
          debitCard,
          pizzas: basket,
        }),
      );
      if (response.meta.requestStatus === 'fulfilled') {
        setIsShowOrder(true);
      }
    }
  };

  useEffect(() => {
    if (user === null) {
      dispatch(AuthActions.getSession());
    }
  }, [user]);

  return {
    user,
    step,
    basket,
    receiverAddress: personInfo.receiverAddress,
    isFetchLoading,
    isPayLoading,
    isShowOrder,
    onBackPage,
    goToMainPage,
    prevStep,
    onProfileSubmit,
    onAddressSubmit,
    onCardSubmit,
  };
};

export { usePaymentPage };
