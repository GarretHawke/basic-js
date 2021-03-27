const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let element of arr) {
      let count = 1;
      if (Array.isArray(element)) {
        count += this.calculateDepth(element);
        if (depth < count) {
          depth = count;
        }
      }
    }
    return depth;
  };
}