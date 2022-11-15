// Get input from user
const firstName = process.argv[5];
const lastName = process.argv[6];
const age = process.argv[7];

// Insert a single record using async/await
const insertDoc = async (ObjectId, collection) => {
    const id = new ObjectId();
    return await collection.insertOne({
        _id: id,
        fname: firstName,
        lname: lastName,
        age: age,
        created_at: id.getTimestamp()
    }).catch(error => {
        console.log(error);
        return console.log('Unable to insert document!');
    });
}

module.exports = insertDoc;