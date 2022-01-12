// jshint esversion:6
// npm init -y ==> To make everything default

/* *** Connection to MongoDB Server *** */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); /* Assert validate the data entry and our connection to the MongoDB database */

// Connection URL 
const url = 'mongodb://localhost:27017';

// Database URL
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);
// const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    /* insertDocuments(db, function() {
        client.close();
    }); */

    findDocuments(db, function() {
        client.close();
    });
});

/* *** Insert a Document into the MongoDB database *** */

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');

    // Insert some documents
    collection.insertMany([

        {
            name : "Apple",
            score : 8,
            review : "Great fruit"
        }, 
        {
            name : "Orange",
            score : 6,
            review : "Kinda sour"
        },
        {
            name : "Banana",
            score : 9,
            review : "Great stuff!"
        }

    ], function(err, result) {  /* For validation if insertion happened successfully */
        assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    } 
    
)};

/* *** Query to Read All the documents ***  */

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
}