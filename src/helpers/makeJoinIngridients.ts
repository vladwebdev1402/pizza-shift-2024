import { Ingredient, NameIngredientsTranslate } from '@/types';

const makeJoinIngridients = (
  ingridient: Ingredient[],
  isFirstUpperCase = false,
) => {
  const str = ingridient
    .map((ing) => NameIngredientsTranslate[ing.name].toLowerCase())
    .join(', ');
  if (isFirstUpperCase) return str.replace(/^\D/, (s) => s.toUpperCase());
  return str;
};

export { makeJoinIngridients };
