function prepareGifts(gifts) {
  const uniqueGifts = new Set(gifts);
  return [...uniqueGifts].sort((a, b) => a - b);
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5])); // [1, 2, 3, 4, 5]
console.log(prepareGifts([6, 5, 5, 5, 5])); // [5, 6]
console.log(prepareGifts([])); // []
