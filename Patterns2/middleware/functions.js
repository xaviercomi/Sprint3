const numJson = require('./parameters.json')

const fn = {
sum: () => numJson[0].a + numJson[0].b,
subtraction: () => numJson[1].a - numJson[1].b ,
multiplication: () => numJson[2].a * numJson[2].b,
}

module.exports = fn;
