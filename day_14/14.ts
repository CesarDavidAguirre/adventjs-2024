function minMovesToStablesTS(reindeer: number[], stables: number[]): number {
  const reindeerSorted = reindeer.sort((a, b) => a - b);
  const stablesSorted = stables.sort((a, b) => a - b);
  let totalMoves = 0;
  for (let index = 0; index < reindeerSorted.length; index++) {
    const reindeer = reindeerSorted[index];
    const stable = stablesSorted[index];
    const moves = Math.abs(reindeer - stable);
    totalMoves += moves;
  }
  return totalMoves;
}

console.log(minMovesToStablesTS([2, 6, 9], [3, 8, 5])); // -> 3
console.log(minMovesToStablesTS([1, 1, 3], [1, 8, 4])); // -> 8
