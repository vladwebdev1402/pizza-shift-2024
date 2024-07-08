import { makeJoinIngridients } from '@/helpers';
import {
  NameDoughTranslate,
  NameSizeTranslate,
  PizzaOrder,
  SizeToCm,
} from '@/types';

const getPizzaInformation = (pizza: PizzaOrder) => {
  return `${pizza.name}, ${NameSizeTranslate[pizza.size.name]} ${SizeToCm[pizza.size.name].toLowerCase()}, 
  ${NameDoughTranslate[pizza.doughs.name].toLowerCase()} ${pizza.toppings.length > 0 ? `+ ${makeJoinIngridients(pizza.toppings)}` : ''}`;
};

export { getPizzaInformation };
