function createFrame(names) {
  const maxLength = Math.max(...names.map((name) => name.trim().length));
  const frameWidth = maxLength + 4;
  const frame = "*".repeat(frameWidth);
  const namesWithPadding = names.map(
    (name) => `* ${name.trim().padEnd(maxLength)} *`
  );
  return [frame, ...namesWithPadding, frame].join("\n");
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
console.log(createFrame(["midu"]));
console.log(createFrame(["a", "bb", "ccc"]));
console.log(createFrame(["a", "bb", "ccc", "dddd"]));
