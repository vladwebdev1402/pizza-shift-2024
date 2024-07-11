const nameFieldsValidate = (value: string) => {
  if (/^[`‘-]+[^]*/g.test(value)) return 'Строка не может начинаться со спец. символа';
  if (/[^]*[`‘-]+$/g.test(value)) return 'Строка не может заканчиваться спец. символом';
  if (/--|``|‘‘/g.test(value))
    return 'В строке не может содержаться несколько подряд идущих спец. символов';
  if (/[а-яА-Я]+/g.test(value) && /[a-zA-Z]+/g.test(value))
    return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
};

const emailFieldValidate = (value: string) => {
  if (/^[@\\.!$&*=^`'|~#%'+/?_{}-]+[^]*/g.test(value))
    return 'Строка не может начинаться со спец. символа';
  if (/[^]*[@\\.!$&*=^`'|~#%'+/?_{}-\d]+$/g.test(value))
    return 'Строка не может заканчиваться спец. символом или числом';
};

const removeNamefieldSpecCharacters = (value: string) => {
  return value.replace(/[^а-яА-Яa-zA-Z\s`‘-]/g, '');
};

export { nameFieldsValidate, emailFieldValidate, removeNamefieldSpecCharacters };
