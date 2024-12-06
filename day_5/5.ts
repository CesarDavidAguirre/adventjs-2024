type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoesTS(shoes: Shoe[]): number[] {
  const result: number[] = [];
  const pairShoes: object = {};
  for (const shoe of shoes) {
    pairShoes[shoe.size] ??= {};
    const otherPair = shoe.type === "I" ? "R" : "I";
    pairShoes[shoe.size][otherPair] ??= 0;
    pairShoes[shoe.size][shoe.type] ??= 0;
    if (pairShoes[shoe.size][otherPair] > 0) {
      pairShoes[shoe.size][otherPair]--;
      result.push(shoe.size);
    } else {
      pairShoes[shoe.size][shoe.type]++;
    }
  }
  return result;
}

console.log(
  organizeShoesTS([
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ])
);

console.log(
  organizeShoesTS([
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
  ])
);
