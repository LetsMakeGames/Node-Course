const find = async (collection) => {
    // Find all records and print the result to the console
    const result = await collection.find({}).toArray().then((result) => {
        return result;
    });
    console.log(result);
}

module.exports = find;