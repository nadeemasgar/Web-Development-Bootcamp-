/* console.log(this);
VM61:1 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
console.log(this + "");
VM76:1 [object Window]
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : () => {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this + ""); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}
     }
 }

 obj.sum();

VM162:6 Sum of two number is 4
VM162:7 [object Window]
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : () => {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this + ""); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}
         return this;
     }
 }

 console.log(obj.sum());

VM212:6 Sum of two number is 4
VM212:7 [object Window]
VM212:12 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : () => {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this + ""); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}
         return this;
     }
 }

 console.log(obj.sum() + "");

VM224:6 Sum of two number is 4
VM224:7 [object Window]
VM224:12 [object Window]
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : function() {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this + ""); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}
         return this;
     }
 }

 console.log(obj.sum() + "");

VM247:6 Sum of two number is 4
VM247:7 [object Object]
VM247:12 [object Object]
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : function() {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this + ""); // {name: 'Md Nadeem Asgar', qualify: 'Btech', sum: ƒ}
         return this;
     }
 }

 console.log(obj.sum() + "");

VM250:6 Sum of two number is 4
VM250:7 [object Object]
VM250:12 [object Object]
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : () => {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this); // window

         function child() {
             var name = "Abhishek";
             console.log("Child Method name is " + name); 
             console.log(this); // window
         }

         child();
     }
 }

 obj.sum()
VM261:6 Sum of two number is 4
VM261:7 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
VM261:11 Child Method name is Abhishek
VM261:12 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
const obj = {
     name : "Md Nadeem Asgar",
     qualify : "Btech",
     sum : () => {
         var add = 2+2;
         console.log("Sum of two number is " + add);
         console.log(this + ""); // window

         function child() {
             var name = "Abhishek";
             console.log("Child Method name is " + name); 
             console.log(this + ""); // window
         }

         child();
     }
 }

 obj.sum()
VM291:6 Sum of two number is 4
VM291:7 [object Window]
VM291:11 Child Method name is Abhishek
VM291:12 [object Window]
undefined
let add = {
  num: 0,
  calc: function () {
    // logs the add object
    console.log(this + " ");

    // using thisreference variable to
    // store the value of this
    thisreference = this;

    function innerfunc() {
      // using the variable to access the
      // context of the outer function
      thisreference.num += 1;

      // logs the add object
      console.log(thisreference + " ");
      return thisreference.num;
    }
    return innerfunc();
  },
};

// logs 1
console.log(add.calc());
VM309:5 [object Object] 
VM309:17 [object Object] 
VM309:25 1
undefined
let add = {
  num: 0,
  calc: () => {
    // logs the add object
    console.log(this + " ");

    // using thisreference variable to
    // store the value of this
    thisreference = this;

    function innerfunc() {
      // using the variable to access the
      // context of the outer function
      thisreference.num += 1;

      // logs the add object
      console.log(thisreference + " ");
      return thisreference.num;
    }
    return innerfunc();
  },
};

// logs 1
console.log(add.calc());
VM318:5 [object Window] 
VM318:17 [object Window] 
VM318:25 NaN
undefined */

for(var p in o)  
   console.log(o[p]);  
