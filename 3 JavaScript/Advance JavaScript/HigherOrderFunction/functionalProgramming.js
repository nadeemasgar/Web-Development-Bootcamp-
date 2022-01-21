/* Think or Make the logic in your head according to the function */
/* Think all the logic into small reusable function */
/* Reusability Modularity */
/* Functional Programming deals with pure function, composition of function, reusability, modularity  */

/* const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (arr, logic) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
      output.push(logic(arr[i]));
  }
  return output;
};

console.log(calculate(radius, area)); 

// console.log(calculate(radius, circumference));

// console.log(calculate(radius, diameter)); */

/* Map is a Higher Order Function which maps the whole array with some logic 
    Map function just create a new array and iterate over each element of the array using which it is called
    and then returns the output

    console.log(radius.map(area));

*/



// Pollyfill for map function

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
