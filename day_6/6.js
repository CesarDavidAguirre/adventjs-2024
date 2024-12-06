/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  return (
    box.every((row) => row[0] === "#" && row[row.length - 1] === "#") &&
    box.slice(1, -1).some((row) => row.includes("*"))
  );
}

console.log(inBox(["###", "#*#", "###"])); // ➞ true
console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true
console.log(inBox(["#* #", "#  #", "####"])); // ➞ false
console.log(inBox(["*####", "#   #", "#  #*", "####"])); // ➞ false
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
