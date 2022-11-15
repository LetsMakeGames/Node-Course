const { MongoClient, ObjectId } = require('mongodb');
const insertDoc = require('./functions/insertDoc');
const findDocByID = require('./functions/findDocById');
const insertManyDocs = require('./functions/insertManyDocs');

// Define database connection
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const flag = process.argv[2];

// Connect to MongoDB database using MongoClient: https://mongodb.github.io/node-mongodb-native/4.11/classes/MongoClient.html
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    // Define database, collection, and document
    const db = client.db(databaseName);
    let collection;
    let docPromise;

    // Insert a single record using async/await
    if (flag === 'insert') {
        collection = db.collection('users');
        docPromise = insertDoc(ObjectId, collection);
        
        // Find a single record by ID and print the result to the console
        findDocByID(docPromise, collection);
    }

    if (flag === 'insertMany') {
        collection = db.collection('tasks');
        manyDocPromise = insertManyDocs(ObjectId ,collection);
    }


})