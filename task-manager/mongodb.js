const { MongoClient, ObjectId } = require('mongodb');
const insertRecord = require('./functions/insertRecord');
const findRecordByID = require('./functions/findRecordByID');

// Define database connection
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Connect to MongoDB database using MongoClient: https://mongodb.github.io/node-mongodb-native/4.11/classes/MongoClient.html
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    // Define database and collection
    const db = client.db(databaseName);
    const collection = db.collection('users');

    // Insert a single record using async/await
    const recordPromise = insertRecord(ObjectId, collection);

    // Find a single record by ID and print the result to the console
    findRecordByID(recordPromise, collection);
})