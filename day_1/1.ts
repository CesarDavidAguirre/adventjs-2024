function prepareGiftsTS(gifts: number[]): number[] {
  const uniqueGifts: Set<number> = new Set(gifts);
  return [...uniqueGifts].sort((a, b) => a - b);
}

console.log(prepareGiftsTS([3, 1, 2, 3, 4, 2, 5])); // [1, 2, 3, 4, 5]
console.log(prepareGiftsTS([6, 5, 5, 5, 5])); // [5, 6]
console.log(prepareGiftsTS([])); // []
