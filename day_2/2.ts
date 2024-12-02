function createFrameTS(names: string[]): string {
  const maxLength = Math.max(...names.map((name) => name.trim().length));
  const frameWidth = maxLength + 4;
  const frame = "*".repeat(frameWidth);
  const namesWithPadding = names.map(
    (name) => `* ${name.trim().padEnd(maxLength)} *`
  );
  return [frame, ...namesWithPadding, frame].join("\n");
}

console.log(createFrameTS(["midu", "madeval", "educalvolpz"]));
console.log(createFrameTS(["midu"]));
console.log(createFrameTS(["a", "bb", "ccc"]));
console.log(createFrameTS(["a", "bb", "ccc", "dddd"]));
