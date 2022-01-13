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

// To save the object
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

/* const kiwi = new Fruit({
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
}); */

/*  *** Insert Many Function *** */
/* Fruit.insertMany([kiwi, orange, banana], function (err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});
 */

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


/* *** Updating the data */
Fruit.updateOne({_id: "61e00e5740ff086b2e05bc07"}, {name: "Grapes"}, function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Successfully updated the document.");
    }
});














