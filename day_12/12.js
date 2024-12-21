/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  if (!/^[*o^#@]+$/g.test(ornaments)) return undefined;
  const ornamentsValues = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  return Array.from(ornaments).reduce(
    (acc, ornament, index, ornamentsArray) => {
      const ornamentValue = ornamentsValues[ornamentsArray[index + 1]];
      const lastOrnamentValue = ornamentsValues[ornament];
      return ornamentValue > lastOrnamentValue
        ? acc - lastOrnamentValue
        : acc + lastOrnamentValue;
    },
    0
  );
}

console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)
console.log(calculatePrice("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePrice("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice("o***")); // 8   (5 + 3)
console.log(calculatePrice("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePrice("*#")); // 49  (-1 + 50)
console.log(calculatePrice("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePrice("#@")); // 50  (-50 + 100)
console.log(calculatePrice("#@Z@")); // undefined (Z es desconocido)