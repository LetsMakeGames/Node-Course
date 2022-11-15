    // Find a single record by ID and print the result to the console
    const findDocByID = async (promise, collection) => {
        // Resolve record promise to obtain record object
        await promise.then(async (result) => {
            const docID = result.insertedId;
            // Find record by ID and return result
            result = await collection.findOne({ _id: docID }).then((result) => {
                return result;
            });
            console.log(result);
        }).catch((error) => {
            console.log(error);
            return console.log('Unable to find document!');
        });
    }

module.exports = findDocByID;