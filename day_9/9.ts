type Space = "·" | "@" | "*" | "o";
type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrainTS(board: Board, mov: Movement): Result {
  // Code here
  const result: Record<string, Result> = {
    "·": "none",
    "*": "eat",
    o: "crash",
  };
  const trainY: number = board.findIndex((row) => row.includes("@"));
  const trainX: number = board[trainY].indexOf("@");
  const nextMove: Record<Movement, [number, number]> = {
    U: [trainY - 1, trainX],
    D: [trainY + 1, trainX],
    L: [trainY, trainX - 1],
    R: [trainY, trainX + 1],
  };
  const [nextY, nextX] = nextMove[mov];
  if (
    nextY < 0 ||
    nextX < 0 ||
    nextY >= board.length ||
    nextX >= board[nextY].length
  ) {
    return result["o"];
  }
  return result[board[nextY][nextX]];
}

console.log(moveTrainTS(["·····", "*····", "@····", "o····", "o····"], "U"));
console.log(moveTrainTS(["·····", "*····", "@····", "o····", "o····"], "D"));
console.log(moveTrainTS(["·····", "*····", "@····", "o····", "o····"], "L"));
console.log(moveTrainTS(["·····", "*····", "@····", "o····", "o····"], "R"));
