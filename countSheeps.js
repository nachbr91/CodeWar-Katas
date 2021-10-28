// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

// My solution:    
let totalSheeps = 0;
    
function countSheeps(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      totalSheeps++;
    }
  }
  return `There are ${totalSheeps} sheeps in total`;
}
countSheeps(arr);

// Better solution:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
