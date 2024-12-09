/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  // Code here
  const result = { "·": "none", "*": "eat", o: "crash" };
  const trainY = board.findIndex((row) => row.includes("@"));
  const trainX = board[trainY].indexOf("@");
  const nextMove = {
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

const board = ["·····", "*····", "@····", "o····", "o····"];
console.log(moveTrain(board, "U"));
console.log(moveTrain(board, "D"));
console.log(moveTrain(board, "L"));
console.log(moveTrain(board, "R"));
