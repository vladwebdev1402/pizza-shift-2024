const addressFieldValidate = (value: string) => {
  if (/^[,.-]+[^]*/g.test(value))
    return 'Строка не может начинаться со спец. символа';
  if (/[^]*[,.-]+$/g.test(value))
    return 'Строка не может заканчиваться спец. символом';
  if (/--|\.\.|,,/g.test(value))
    return 'В строке не может содержаться несколько подряд идущих спец. символов';
  if (/[а-яА-Я]+/g.test(value) && /[a-zA-Z]+/g.test(value))
    return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
};

export { addressFieldValidate };
