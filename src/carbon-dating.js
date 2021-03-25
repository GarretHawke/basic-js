const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = 0;
  if (sampleActivity == null || typeof(sampleActivity) !== 'string') return false;
  else {
    sample = parseFloat(sampleActivity);
  }

  if (isNaN(sample) || sample <= 0) return false;
  
  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.ceil(Math.log(MODERN_ACTIVITY / sample) / k);
  if (time < 0) return false;
  return time;
};
