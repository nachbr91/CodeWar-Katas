// Instructions:

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// My answer:

let yearsOld = 0;

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld >= sonYearsOld * 2) {
    yearsOld = dadYearsOld - sonYearsOld * 2;
  } else {
    yearsOld = sonYearsOld * 2 - dadYearsOld;
  }
  return yearsOld;
}

// Better solution:

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
