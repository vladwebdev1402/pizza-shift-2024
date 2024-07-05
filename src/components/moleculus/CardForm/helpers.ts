const makePanMask = (numbers: string) => {
  if (numbers.length < 5) return numbers;
  return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)}`;
};

const makeExpireDateMask = (numbers: string) => {
  if (numbers.length < 3) return numbers;
  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
};

const validateExpireDate = (value: string) => {
  if (value.length === 5) {
    const [month, year] = value.split('/').map(Number);
    if (month === 0 || month > 12) return 'Месяц введён некорретно';
    if (new Date(2000 + year, month).getTime() < new Date().getTime())
      return 'Срок годности карты истёк';
  }
};

export { makePanMask, makeExpireDateMask, validateExpireDate };
