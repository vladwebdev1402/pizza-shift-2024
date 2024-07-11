type NameIngredients =
  | 'PINEAPPLE'
  | 'MOZZARELLA'
  | 'PEPERONI'
  | 'GREEN_PEPPER'
  | 'MUSHROOMS'
  | 'BASIL'
  | 'CHEDDAR'
  | 'PARMESAN'
  | 'FETA'
  | 'HAM'
  | 'PICKLE'
  | 'TOMATO'
  | 'BACON'
  | 'ONION'
  | 'CHILE'
  | 'SHRIMPS'
  | 'CHICKEN_FILLET'
  | 'MEATBALLS';

type NameSizes = 'SMALL' | 'MEDIUM' | 'LARGE';
type NameDough = 'THIN' | 'THICK';

enum NameIngredientsTranslate {
  'PINEAPPLE' = 'Ананас',
  'MOZZARELLA' = 'Моцарелла',
  'PEPERONI' = 'Пеперони',
  'GREEN_PEPPER' = 'Зелёный перец',
  'MUSHROOMS' = 'Грибы',
  'BASIL' = 'Базилик',
  'CHEDDAR' = 'Чеддер',
  'PARMESAN' = 'Пармезан',
  'FETA' = 'Фета',
  'HAM' = 'Ветчина',
  'PICKLE' = 'Маринованные огурцы',
  'TOMATO' = 'Помидоры',
  'BACON' = 'Бекон',
  'ONION' = 'Лук',
  'CHILE' = 'Чили',
  'SHRIMPS' = 'Креветки',
  'CHICKEN_FILLET' = 'Куриное филе',
  'MEATBALLS' = 'Фрикадельки',
}

enum NameSizeTranslate {
  'SMALL' = 'Маленькая',
  'MEDIUM' = 'Средняя',
  'LARGE' = 'Большая',
}

enum SizeToCm {
  'SMALL' = '30 см',
  'MEDIUM' = '40 см',
  'LARGE' = '50 см',
}

enum NameDoughTranslate {
  'THIN' = 'Традиционное тесто',
  'THICK' = 'Толстое тесто',
}

type Size = {
  name: NameSizes;
  price: number;
};

type Ingredient = {
  name: NameIngredients;
  cost: number;
  img: string;
};

type Dough = {
  name: NameDough;
  price: number;
};

type Pizza = {
  id: string;
  name: string;
  ingredients: Ingredient[];
  toppings: Ingredient[];
  description: string;
  sizes: Size[];
  doughs: Dough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
};

type PizzaOrder = {
  id: string;
  name: string;
  description: string;
  toppings: Ingredient[];
  size: Size;
  doughs: Dough;
};

type PizzaBasket = {
  uuid: string;
  count: number;
  img: string;
} & PizzaOrder;

export { NameIngredientsTranslate, NameSizeTranslate, NameDoughTranslate, SizeToCm };
export type {
  Pizza,
  PizzaOrder,
  PizzaBasket,
  Ingredient,
  Size,
  NameIngredients,
  NameSizes,
  NameDough,
  Dough,
};
