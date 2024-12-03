type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventoryTS(inventory: Inventory): object {
  let result: Record<string, Record<string, number>> = {};
  for (const item of inventory) {
    const { name, quantity, category } = item;
    result[category] ??= {};
    result[category][name] ??= 0;
    result[category][name] += quantity;
  }
  return result;
}

console.log(
  organizeInventoryTS([
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
  ])
);

console.log(
  organizeInventoryTS([
    { name: "book", quantity: 10, category: "education" },
    { name: "book", quantity: 5, category: "education" },
    { name: "paint", quantity: 3, category: "art" },
  ])
);
