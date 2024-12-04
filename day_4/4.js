function createXmasTree(height, ornament) {
  const tree = [];
  const maxLong = height * 2 - 1;
  for (let i = 0; i < height; i++) {
    const side = "_".repeat((maxLong - (i * 2 + 1)) / 2);
    tree.push(`${side}${ornament.repeat(i * 2 + 1)}${side}`);
  }
  const baseSide = "_".repeat((maxLong - 1) / 2);
  const base = `${baseSide}#${baseSide}`;
  return [...tree, base, base].join("\n");
}

console.log(createXmasTree(5, "*"));
console.log(createXmasTree(3, "+"));
console.log(createXmasTree(6, "@"));
