const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) == 'number') {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error ('Error');
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = chainMaker;
