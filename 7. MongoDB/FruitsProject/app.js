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

const mango = new Fruit({
    name: "Mango",
    score: 10,
    review: "Decent Fruit"
})

mango.save(); 

// const person = new Person({
//     name: "Amy", 
//     age: 12,
//     favouriteFruit: pineapple
// });

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Successfully updated the Document");
    }
});

// person.save();


/*  *** To Read the data from MongoDB *** */
Fruit.find(function (err, fruits) {
    if(err) {
        console.log(err);
    }
    else {

        mongoose.connection.close(); // To close the connection

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    }
});












