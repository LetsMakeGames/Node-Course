// Get input from user
const firstName = process.argv[2];
const lastName = process.argv[3];
const age = process.argv[4];

// Insert a single record using async/await
const insertRecord = async (ObjectId, collection) => {
    const id = new ObjectId();
    return await collection.insertOne({
        _id: id,
        fname: firstName,
        lname: lastName,
        age: age,
        created_at: id.getTimestamp()
    }).catch(error => {
        console.log(error);
        return console.log('Unable to insert record!');
    });
}

module.exports = insertRecord;