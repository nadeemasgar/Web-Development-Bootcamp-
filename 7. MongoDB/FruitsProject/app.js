// jshint esversion:6 

const mongoose = require('mongoose');

// Connection URL -- database name is fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB");
/* mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true } ); */

// Defining the Schema (Structure of the data)
const fruitSchema = new mongoose.Schema ( { 
    name: String,
    rating: Number,
    review: String
});

// Creating Mongoose Model - 1st parameter is the name of collection which should be singular form
// then converted into plural form my mongoose
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple", 
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema ( {
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John", 
    age: 37
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi", 
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange", 
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana", 
    score: 3, 
    review: "Weird texture"
});

Fruit.insertMany([kiwi, orange, banana], function (err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});















