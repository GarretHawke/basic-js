const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  repeatTimes = Number(repeatTimes);
  additionRepeatTimes = Number(additionRepeatTimes);
  addition = String(addition);

  let strInner = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let strOuter = new Array(repeatTimes).fill(str + strInner);
  let newStr = strOuter.join(separator);
  return newStr;
};
  