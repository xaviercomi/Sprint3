const numJson = require('./parameters.json')

const fn = {

    sum: () => numJson.a + numJson.b,
    subtraction: () => numJson.a - numJson.b,
    multiplication: () => numJson.a * numJson.b,

}

module.exports = fn;
