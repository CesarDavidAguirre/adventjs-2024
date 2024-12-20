/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const index_1 = filename.indexOf("_");
  const index_2 = filename.lastIndexOf(".");
  return filename
    .split("")
    .slice(index_1 + 1, index_2)
    .join("");
}

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
console.log(decodeFilename("987654321_elf-roster.csv.tempfile"));
console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
