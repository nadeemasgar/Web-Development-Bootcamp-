// Bind function will give a copy of function that can be invoked later

/* const youtuber = {
  name: "ThapaTechnical",
  content: "Programming",
  feature: function () {
    console.log(`My fav youtuber name is ${this.name}. 
        He made videos on ${this.content} topics. `);
  },
}; */

// youtuber.feature();


// let youtuberFun = youtuber.feature;
// youtuberFun();     ==>> Doesn't work

/* The bind() method takes an object as an first argument and creates a new function */
/* 
let youtuberFun2 = youtuber.feature.bind(youtuber);
youtuberFun2(); */


const youtuber = {
    name: "ThapaTechnical",
    content: "programming"
}

const youtuber1 = {
    name: "ThapaTechnical1",
    content: "programming1"
}

function features() {
    console.log(`My fav youtuber name is ${this.name}.
        He made videos on ${this.content} topics. `);
}

let you1 = features.bind(youtuber);
you1();

let you2 = features.bind(youtuber1);
you2();