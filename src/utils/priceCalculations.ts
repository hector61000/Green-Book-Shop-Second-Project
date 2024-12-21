export const calculatePaperBooksPrice = (numberOfBooks: number): number => {
  if (numberOfBooks === 0) return 0;
  if (numberOfBooks === 1) return 399;
  if (numberOfBooks === 2) return 700;
  if (numberOfBooks === 3) return 950;
  // For more than 3 books: 950 + 250 for each additional book
  return 950 + (numberOfBooks - 3) * 250;
};

export const calculateElectronicBooksPrice = (numberOfBooks: number): number => {
  if (numberOfBooks === 0) return 0;
  if (numberOfBooks === 1) return 150;
  if (numberOfBooks === 2) return 250;
  if (numberOfBooks === 3) return 350;
  // For more than 3 books: 350 + 75 for each additional book
  return 350 + (numberOfBooks - 3) * 75;
};