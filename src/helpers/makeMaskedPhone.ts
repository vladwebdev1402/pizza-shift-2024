const makeMaskedPhone = (numbers: string) => {
  if (numbers.length === 0) {
    return '';
  }

  if (numbers.length === 1) {
    return `+${numbers.slice(0, 1)}`;
  }

  if (numbers.length <= 4) {
    return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)}`;
  }

  if (numbers.length <= 7) {
    return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)}`;
  }

  if (numbers.length <= 9) {
    return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7, 9)}`;
  }

  return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7, 9)} ${numbers.slice(9, 11)}`;
};

export { makeMaskedPhone };
