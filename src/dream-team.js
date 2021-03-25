const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  members.forEach((element) => {
    if (typeof(element) == 'string') {
      arr.push(element.trim()[0].toUpperCase());
    }
  });
  return arr.sort().join('');
};
