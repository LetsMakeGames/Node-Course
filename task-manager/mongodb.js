const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Define database connection
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Connect to MongoDB database using MongoClient: https://mongodb.github.io/node-mongodb-native/4.11/classes/MongoClient.html
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);
    const collection = db.collection('users');

    // Get first and last name from user input
    const firstName = process.argv[2];
    const lastName = process.argv[3];
    const age = process.argv[4];


    // Insert a single record using async/await
    const insertRecord = async () => {
        return await collection.insertOne({
            fname: firstName,
            lname: lastName,
            age: age
        }).catch(error => {
            console.log(error);
        });
    }
    const recordPromise = insertRecord();

    // Find a single record by ID and print the result to the console
    const findRecordByID = async (promise) => {
        // Resolve record promise to obtain record object
        await promise.then(async (result) => {
            const recordID = String(result.insertedId);
            // Find record by ID and return result
            result = await collection.findOne({ _id: new mongodb.ObjectId(recordID) }).then((result) => {
                return result;
            });
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    findRecordByID(recordPromise);
})