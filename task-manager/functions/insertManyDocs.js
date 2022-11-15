const docs = [
    { task: 'Buy milk', completed: false },
    { task: 'Buy bread', completed: false },
    { task: 'Buy eggs', completed: true }
]

const insertManyDocs = async () => {
    return await collection.insertMany(docs)
    .catch(error => {
        console.log(error);
        return console.log('Unable to insert documents!');
    });
}

module.exports = insertManyDocs;