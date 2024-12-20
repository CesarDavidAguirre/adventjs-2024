/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  // Code here
  const robot = {
    x: 0,
    y: 0,
  };
  const lastMove = {
    L: false,
    R: false,
    U: false,
    D: false,
  };
  const movesFn = {
    L: (index) => {
      robot.x -= 1;
      lastMove.L = true;
      return index + 1;
    },
    R: (index) => {
      robot.x += 1;
      lastMove.R = true;
      return index + 1;
    },
    U: (index) => {
      robot.y += 1;
      lastMove.U = true;
      return index + 1;
    },
    D: (index) => {
      robot.y -= 1;
      lastMove.D = true;
      return index + 1;
    },
    "*": (index) => {
      const nextMove = moves[index + 1];
      movesFn[nextMove](0);
      movesFn[nextMove](0);
      return index + 2;
    },
    "?": (index) => {
      const nextMove = moves[index + 1];
      if (!lastMove[nextMove]) {
        movesFn[nextMove](index);
      }
      return index + 2;
    },
  };
  let index = 0;
  moves = moves.replaceAll("!U", "D");
  moves = moves.replaceAll("!D", "U");
  moves = moves.replaceAll("!L", "R");
  moves = moves.replaceAll("!R", "L");
  while (index < moves.length) {
    const element = moves[index];
    index = movesFn[element](index);
  }
  return (robot.x === 0 && robot.y === 0) || Object.values(robot);
}

console.log("R", isRobotBack("R"));
console.log("RL", isRobotBack("RL"));
console.log("RLUD", isRobotBack("RLUD"));
console.log("*RU", isRobotBack("*RU"));
console.log("R*U", isRobotBack("R*U"));
console.log("LLL!R", isRobotBack("LLL!R"));
console.log("R?R", isRobotBack("R?R"));
console.log("U?D", isRobotBack("U?D"));
console.log("R!L", isRobotBack("R!L"));
console.log("U!D", isRobotBack("U!D"));
console.log("R?L", isRobotBack("R?L"));
console.log("U?U", isRobotBack("U?U"));
console.log("*U?U", isRobotBack("*U?U"));
console.log("U?D?U", isRobotBack("U?D?U"));

console.log("R!U?U", isRobotBack("R!U?U"));
console.log("UU!U?D", isRobotBack("UU!U?D"));
