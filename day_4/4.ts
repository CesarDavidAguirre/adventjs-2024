function createXmasTreeTS(height: number, ornament: string) {
  const tree: Array<string> = [];
  const maxLong = height * 2 - 1;
  for (let i = 0; i < height; i++) {
    const side = "_".repeat((maxLong - (i * 2 + 1)) / 2);
    tree.push(`${side}${ornament.repeat(i * 2 + 1)}${side}`);
  }
  const baseSide = "_".repeat((maxLong - 1) / 2);
  const base = `${baseSide}#${baseSide}`;
  return [...tree, base, base].join("\n");
}

console.log(createXmasTreeTS(5, "*"));
console.log(createXmasTreeTS(3, "+"));
console.log(createXmasTreeTS(6, "@"));
