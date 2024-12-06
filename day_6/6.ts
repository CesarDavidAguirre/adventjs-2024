/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBoxTS(box: string[]): boolean {
  return (
    box.every((row) => row[0] === "#" && row[row.length - 1] === "#") &&
    box.slice(1, -1).some((row) => row.includes("*"))
  );
}

console.log(inBoxTS(["###", "#*#", "###"])); // ➞ true
console.log(inBoxTS(["####", "#* #", "#  #", "####"])); // ➞ true
console.log(inBoxTS(["#* #", "#  #", "####"])); // ➞ false
console.log(inBoxTS(["*####", "#   #", "#  #*", "####"])); // ➞ false
console.log(inBoxTS(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
