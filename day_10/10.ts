function compileTS(instructions: string[]): number {
  const registers: Record<string, number> = {};
  const commandsFn = {
    MOV: (x: string, y: string, index: number) => {
      registers[y] ??= 0;
      const parseX = parseInt(x, 10);
      const value =
        typeof parseX === "number" && !isNaN(parseX) ? parseX : registers[x];
      registers[y] = value;
      return index + 1;
    },
    INC: (x: string, index: number) => {
      registers[x] = (registers[x] ?? 0) + 1;
      return index + 1;
    },
    DEC: (x: string, index: number) => {
      registers[x] = (registers[x] ?? 0) - 1;
      return index + 1;
    },
    JMP: (x: string, y: string, index: number) => {
      registers[x] ??= 0;
      return registers[x] === 0 ? parseInt(y, 10) : index + 1;
    },
  };
  let index = 0;
  while (index < instructions.length) {
    const [command, ...args] = instructions[index].split(" ");
    index = commandsFn[command](...args, index);
  }
  return registers.A;
}

console.log(compileTS(["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"]));
