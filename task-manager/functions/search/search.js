const find = require('./find');
const findOne = require('./findOne');

const search = async (arg, collection) => {
    // Check arg for function name
    if (arg === 'one') {
        await findOne(collection);
    } else if (arg === 'all') {
        await find(collection);
    } else {
        console.log('Invalid search argument! \nValid Args: \'one\', \'all\'');
    }

}

module.exports = search;