// var a23 = 1;
// function b24() {
//   a23 = 10;
//   function a23() {
//     return 11;
//   }
//   console.log(a23());
// }
// b24();
// console.log(a23);

// var a = 10;
// function a() {
//     console.log(20);
// }

// console.log(a());

// var a = 10;
// function b() {
//      a = 20;
//     console.log(a);
// }

// b();
// console.log(a);

// if(false) {
//     console.log(10);
// }
// else {
//     console.log(20);
// }

// var x = 10;
// function test()
// {
// 	var x = 20;
// 	console.log(x);
// }

// test();

// var x = 10;

// function test() {
//   if (true) {
//     var x = 50;
//   }

//   console.log(x);
// }

// test();

// var x;
// x = 10;

// function test()
// {
// 	var x;
// 	if (x > 20) {
// 		x = 50;
// 	}

// 	console.log(x);
// }

// test();
// console.log(x);

/* var x = Math.floor("1000.01");
console.log(typeof(x)); */

/* const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : function () {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}

         function child() {
             var name = "Abdur";
             console.log("Child Method name is " + name); 
             console.log(this); // window
         }

         child();
     }
 }

 obj.sum(); */

// "use strict";

// function sum(a, b) {
//   add = a + b;
//   console.log(add);
// }

// sum(10, 10);

// console.log("I am a " + job);
//     var job = "Web Developer";
//     console.log("I am a " + job);

//     function whoAmI() {
//         console.log("I am a " + job);
//         var job = "Full Stack";
//         console.log("I am a " + job);
//     }

//     whoAmI();

// var x = 10;

//     function abc() {
//         console.log(x);  // Uncaught ReferenceError: Cannot access 'x' before initialization
//         const x = 10;
//     }

//     abc();

/* let b = 10;
const outerFun = (a) => {
  const innerFun = () => {
    let sum = a + b;
    console.log(`The sum of two no. is ${sum}. `);
  };
  innerFun();
};
outerFun(5);
 */

/* const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`The sum of two no. is ${sum}. `);
  };
  return innerFun;
};
let inner = outerFun(5);
console.dir(inner);
inner(); */

const interviewQuestions = (name) => {
  return function (topic) {
    if (name === "vinod") {
      console.log(`Hi, ${name}. Plz explain what is ${topic}. `);
    } else if (name === "thapa") {
      console.log(`Hi, ${name}. Plz explain what is ${topic}. `);
    } else if (name === "thapatechnical") {
      console.log(`Hi, ${name}. Plz explain what is ${topic}. `);
    } else {
      console.log("Welcome to TT company");
    }
  };
};

// const candidate1 = interviewQuestions("vinod");
// candidate1("UI");
// candidate1("Developer");

// const candidate2 = interviewQuestions("thapa");
// candidate2("reactjs");

// interviewQuestions("vinod")("UI");
// interviewQuestions("thapa")("reactjs");
// interviewQuestions("thapatechnical")("nodejs");

/* var matchWin = "India";
if (true) {
  let matchWin = "South Africa";
  console.log(matchWin); // South Africa
}
console.log(matchWin); // South Africa */

/* let matchWin = "India";
if (true) {
  let matchWin = "South Africa";
  console.log(matchWin); // South Africa
}
console.log(matchWin); // India */

// Global Object in javaScript is window
// console.log(this); // Window

// function sum() {
//   var add = 2 + 2;
//   console.log("Sum of two number is " + add);
//   console.log(this); // Window
// }
// sum();

/* const obj = {
    name : "Nadeem Asgar",
    qualify : this,
    sum : function() {
        var add = 2+2;
        console.log("Sum of two number is " + add);
        console.log(this.name);
       console.log(this);   // {name: 'Nadeem Asgar', qualify: 'Btech', sum: ƒ}
    }
}
obj.sum();
console.log(obj.qualify); */

/* let fun = () => {
    var add = 2+2;
     console.log("Sum of two number is " + add);
     console.log(this); // Window
 }
 fun(); */

/* const obj = {
  name: "Nadeem Asgar",
  qualify: "Btech",
  sum : function() {
    var add = 10 + 2;
    console.log("Sum of two number is " + add);
    return this + ""; // Window
  },
};
console.log(obj.sum());
 */

/* const obj = {
  name: "Md Nadeem Asgar",
  qualify: "Btech",
  sum: function () {
    var add = 2 + 2;
    console.log("Sum of two number is " + add);
    console.log(this); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}

    function child() {
      var name = "Abdur";
      console.log("Child Method name is " + name);
      console.log(this); // window
    }

    child();
  },
};

obj.sum(); */

// let add = {
//   num: 0,
//   calc: function () {
//     // logs the add object
//     console.log(this + " ");
//     console.log(this.num);
//     return this.num;
//   },
// };

// // logs 1
// console.log(add.calc());
// // // logs 2
// // document.write(add.calc());

// let add = {
//   num: 0,
//   calc: function () {
//     // logs the add object
//     console.log(this + " ");

//     function innerfunc() {
//       this.num += 1;

//       // logs the window object
//       console.log(this + " ");

//       return this.num;
//     }
//     return innerfunc();
//   },
// };

// // logs NaN
// console.log(add.calc());

// // logs NaN
// console.log(add.calc());

// console.log(this + "");

/* let add = {
  num: 0,
  calc: function () {
    // logs the add object
    console.log(this);

    // using thisreference variable to
    // store the value of this

    function innerfunc() {
      // using the variable to access the
      // context of the outer function
      this.num += 1;

      // logs the add object
      console.log(this);
      return this.num;
    }
    return innerfunc();
  },
};

// logs 1
console.log(add.calc()); */



const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : () => {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}

         let child = () => {
             var name = "Abhishek";
             console.log("Child Method name is " + name); 
             console.log(this); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}
         }

         child();
     }
 }

 obj.sum();
