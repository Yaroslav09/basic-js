const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter((el) => Array.isArray(el)).length != 0) {
      let b = 1 + calculateDepth([].concat(...arr));
      return b;
    } else {
      return 0;
    }
  }
};
