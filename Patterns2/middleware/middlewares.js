const numJson = require('./parameters.json')
const Middle = require('./gestorMW');
const fn = require('./functions')

app = new Middle(fn)

app.use( (next) => {
  console.log(`square ${ (numJson.a) **2 }`)
  next();
})
app.use( (next) => {
  console.log(`cube ${ (numJson.a) **3 }`)
  next();
})
app.use( (next) => {
  console.log(`division ${ (numJson.a) /2 }`)
  next();
})


console.log(fn.sum());
console.log(fn.subtraction());
console.log(fn.multiplication());

