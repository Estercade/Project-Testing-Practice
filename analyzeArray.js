// analyzeArray(array) array of numbers and 
// returns an object with the following properties: 
// average, min, max, and length
function analyzeArray(arr) {
  return {
    average: findAverage(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length
  };
}

function findAverage(arr) {
  let total = arr.reduce((accumulator, current) => accumulator + current, 0);
  return total / arr.length;
}

function findMin(arr) {
  let min = arr[0];
  for (let num of arr) {
    min = Math.min(min, num);
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    max = Math.max(max, num);
  }
  return max;
}

module.exports = analyzeArray;