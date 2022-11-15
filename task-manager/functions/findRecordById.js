    // Find a single record by ID and print the result to the console
    const findRecordByID = async (promise, collection) => {
        // Resolve record promise to obtain record object
        await promise.then(async (result) => {
            const recordID = result.insertedId;
            // Find record by ID and return result
            result = await collection.findOne({ _id: recordID }).then((result) => {
                return result;
            });
            console.log(result);
        }).catch((error) => {
            console.log(error);
            return console.log('Unable to find record!');
        });
    }

module.exports = findRecordByID;