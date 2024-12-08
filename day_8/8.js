/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  const result = [];
  const lane = "~".repeat(length);
  for (let i = 0; i < indices.length; i++) {
    const position = indices[i];
    let buildLine = " ".repeat(indices.length - i - 1);
    if (position === 0) {
      buildLine += `${lane} /${i + 1}`;
    } else {
      let laneWithReno = lane.split("");
      const realPosition = position < 0 ? length + position : position;
      laneWithReno[realPosition] = "r";
      buildLine += `${laneWithReno.join("")} /${i + 1}`;
    }
    result.push(buildLine);
  }
  return result.join("\n");
}

console.log(drawRace([0, 5, -3], 10));
console.log(drawRace([2, -1, 0, 5], 8));
console.log(drawRace([3, 7, -2], 12));
