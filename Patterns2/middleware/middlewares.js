const app = require('./gestorMW');
const fn = require('./functions')

app.append( (next) => {
  console.log('square: ' + (fn.sum()) * 2 + ' from sum function result')
  next();
})
app.append( (next) => {
  console.log('cube: ' + (fn.subtraction()) * 3 + ' from subtraction function result')
  next();
})
app.append( (next) => {
  console.log('division: ' + (fn.multiplication()) / 2 + ' from multiplication function result')
  next();
})

app.run();