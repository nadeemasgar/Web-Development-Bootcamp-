// Map function is used to transform an array
// Transform means to change each and every value of array and get a new array out of it

const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

function double(x) {
  return x * 2;
}
const output1 = arr.map(double);
console.log(output1);


const output2 = arr.map((x) => {
  return x * 3;
});
console.log(output2);


const output3 = arr.map((x) => x * 4);
console.log(output3);


const output4 = arr.map(function binary(x) {
  return x.toString(2);
});
console.log(output4);
