const insertManyDocs = async (ObjectId ,collection) => {
    const docs = [
        { _id: new ObjectId(), task: 'Buy milk', completed: false, created_at: new ObjectId().getTimestamp() },
        { _id: new ObjectId(), task: 'Buy bread', completed: false, created_at: new ObjectId().getTimestamp() },
        { _id: new ObjectId(), task: 'Buy eggs', completed: true, created_at: new ObjectId().getTimestamp() },
    ]
    return await collection.insertMany(docs)
    .catch(error => {
        console.log(error);
        return console.log('Unable to insert documents!');
    });
}

module.exports = insertManyDocs;