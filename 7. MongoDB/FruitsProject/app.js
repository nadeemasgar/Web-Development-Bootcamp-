// jshint esversion:6 

const mongoose = require('mongoose');

// Connection URL -- database name is fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB");
/* mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true } ); */

// Defining the Schema (Structure of the data)
const fruitSchema = new mongoose.Schema ( { 
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]   /* validation is done here */
    },
    rating: {   
        type: Number,  
        min: 1,  /* validation is done here */
        max: 10
    },
    review: String
});

// Creating Mongoose Model - 1st parameter is the name of collection which should be singular form
// then converted into plural form my mongoose
const Fruit = mongoose.model("Fruit", fruitSchema);

// Data Object
const fruit = new Fruit ({
    rating: 10,
    review: "Tasty"
});

const personSchema = new mongoose.Schema ( {
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great Fruit"
})

pineapple.save(); 

const person = new Person({
    name: "Amy", 
    age: 12,
    favouriteFruit: pineapple
});

person.save();


/*  *** To Read the data from MongoDB *** */
Fruit.find(function (err, fruits) {
    if(err) {
        console.log(err);
    }
    else {

        /* mongoose.connection.close(); // To close the connection */

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    }
});












