/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRaceTS(indices: number[], length: number): string {
  const result: string[] = [];
  const lane: string = "~".repeat(length);
  for (let i = 0; i < indices.length; i++) {
    const position: number = indices[i];
    let buildLane: string = " ".repeat(indices.length - i - 1);
    if (position === 0) {
      buildLane += `${lane} /${i + 1}`;
    } else {
      let laneWithReno = lane.split("");
      const realPosition = position < 0 ? length + position : position;
      laneWithReno[realPosition] = "r";
      buildLane += `${laneWithReno.join("")} /${i + 1}`;
    }
    result.push(buildLane);
  }
  return result.join("\n");
}

console.log(drawRaceTS([0, 5, -3], 10));
console.log(drawRaceTS([2, -1, 0, 5], 8));
console.log(drawRaceTS([3, 7, -2], 12));
