const fn = require('./functions')

const middle = () => {

    console.log(fn.sum() ** 2),
    console.log(fn.subtraction() ** 3),
    console.log(fn.multiplication() / 2)

}

module.exports = middle;