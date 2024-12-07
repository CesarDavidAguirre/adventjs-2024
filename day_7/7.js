/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let result = packages;
  while (result.includes("(")) {
    const start = result.lastIndexOf("(");
    const end = result.indexOf(")", start);
    const content = result.slice(start + 1, end);
    result =
      result.slice(0, start) +
      content.split("").reverse().join("") +
      result.slice(end + 1);
  }
  return result;
}

console.log(fixPackages("a(cb)de") === "abcde");
console.log(fixPackages("a(bc(def)g)h") === "agdefcbh");
console.log(fixPackages("abc(def(gh)i)jk") === "abcighfedjk");
console.log(fixPackages("a(b(c))e") === "acbe");
