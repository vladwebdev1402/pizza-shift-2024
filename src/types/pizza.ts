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
  'GREEN_PEPPER' = 'зелёный перец',
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

enum NameDoughTranslate {
  'THIN' = 'Тонкое',
  'THICK' = 'Толстое',
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

type Pizza = {
  id: string;
  name: string;
  ingredients: Ingredient[];
  toppings: Ingredient[];
  description: string;
  sizes: Size[];
  doughs: NameDough[];
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
export { NameIngredientsTranslate, NameSizeTranslate, NameDoughTranslate };
export type { Pizza, Ingredient, Size, NameIngredients, NameSizes, NameDough };
