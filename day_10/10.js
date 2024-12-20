/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {};
  const commandsFn = {
    MOV: (x, y, index) => {
      registers[y] ??= 0;
      const parseX = parseInt(x, 10);
      const value =
        typeof parseX === "number" && !isNaN(parseX) ? parseX : registers[x];
      registers[y] = value;
      return index + 1;
    },
    INC: (x, index) => {
      registers[x] = (registers[x] ?? 0) + 1;
      return index + 1;
    },
    DEC: (x, index) => {
      registers[x] = (registers[x] ?? 0) - 1;
      return index + 1;
    },
    JMP: (x, y, index) => {
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

console.log(compile(["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"]));
