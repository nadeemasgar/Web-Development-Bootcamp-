// Filter function is used to filter the element in the array
// Suppose we want to filter the element that are odd inside an array


// Filter odd values 

const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
    return x % 2;
}

const output = arr.filter(isOdd);

console.log(output);