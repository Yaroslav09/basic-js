const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let re = matrix.flat(); 
  const result = re.filter((elem) => {
    if (elem === "^^") {
      return true;
    } else {
      return false;
    }
  });
  return result.length;
};
