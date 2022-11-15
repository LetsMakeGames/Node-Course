const { ObjectId } = require("mongodb");

const findOne = async (collection) => {
    const id = new ObjectId("637412d1e01ab6baa3db2f3b");
    // Find a single record and print the result to the console
    const result = await collection.findOne({ _id: id }).then((result) => {
        return result;
    });
    console.log(result);
}

module.exports = findOne;