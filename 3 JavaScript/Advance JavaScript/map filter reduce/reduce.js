// Reduce Function actually does not reduce anything
// Reduce function is basically used at a place where you have to take all the elements of the array and come
// up with the single value out of them

// Suppose if you have to iterate over array and find the sum of elements present in the array
// Or iterate over the array and find the maximum element present in the array

const arr = [5, 1, 3, 2, 6];

// sum or maximum

/* function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output); */

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);
