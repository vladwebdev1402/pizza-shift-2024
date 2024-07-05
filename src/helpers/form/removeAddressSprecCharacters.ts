const removeAddressSprecCharacters = (value: string) => {
  return value.replace(/[^а-яА-Яa-zA-Z0-9\s-,.]/g, '');
};

export { removeAddressSprecCharacters };
