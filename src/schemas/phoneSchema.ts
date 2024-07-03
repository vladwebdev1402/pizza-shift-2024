import * as yup from 'yup';

const phoneSchema = yup
  .string()
  .required('Поле обязательно для заполнения')
  .matches(
    /\+\d \d\d\d \d\d\d \d\d \d\d/g,
    'Введите телфон в формате +X XXX XXX XX XX',
  );

export { phoneSchema };
