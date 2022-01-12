// jshint esversion:6
// npm init -y ==> To make everything default

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); /* Assert validate the data entry and our connection to the MongoDB database */

// Connection URL 
const url = 'mongodb://localhost:27017';

// Database URL
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);
/* const client = new MongoClient(url, { useNewUrlParser: true }); */

// Use connect method to connectto the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});