/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePriceTS(ornaments: string): number | undefined {
  if (!/^[*o^#@]+$/g.test(ornaments)) return undefined;
  const ornamentsValues = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  let acc = 0;
  for (let index = 0; index < ornaments.length; index++) {
    const ornament = ornaments[index];
    const ornamentValue = ornamentsValues[ornaments[index + 1]];
    const lastOrnamentValue = ornamentsValues[ornament];
    if (ornamentValue > lastOrnamentValue) {
      acc -= lastOrnamentValue;
    } else {
      acc += lastOrnamentValue;
    }
  }
  return acc;
}

console.log(calculatePriceTS("***")); // 3   (1 + 1 + 1)
console.log(calculatePriceTS("*o")); // 4   (5 - 1)
console.log(calculatePriceTS("o*")); // 6   (5 + 1)
console.log(calculatePriceTS("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePriceTS("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePriceTS("o***")); // 8   (5 + 3)
console.log(calculatePriceTS("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePriceTS("*#")); // 49  (-1 + 50)
console.log(calculatePriceTS("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePriceTS("#@")); // 50  (-50 + 100)
console.log(calculatePriceTS("#@Z@")); // undefined (Z es undefined)
