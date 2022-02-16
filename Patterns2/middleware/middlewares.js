const app = require('./gestorMW');
const fn = require('./functions')

app.append( (next) => {
  console.log(`square: from sum ${fn.sum()} function result`)
  next();
})
app.append( (next) => {
  console.log(`cube: from subtraction ${fn.subtraction()} function result`)
  next();
})
app.append( (next) => {
  console.log(`division: from multiplication ${fn.multiplication()} function result`)
  next();
})

app.run();