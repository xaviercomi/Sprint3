const numJson = require('./parameters.json')
const Middle = require('./gestorMW');
const Funcio = require('./funcions');

const calcular = new Funcio()
const app = new Middle(calcular)

app.usa( (next) => {
  console.log(`square ${ (numJson.a) **2 }`)
  next();
})
app.usa( (next) => {
  console.log(`cube ${ (numJson.a) **3 }`)
  next();
})
app.usa( (next) => {
  console.log(`division ${ (numJson.a) /2 }`)
  next();
})


console.log(app.suma());
console.log(app.resta());
console.log(app.multiplica());

