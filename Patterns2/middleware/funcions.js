const numJson = require('./parameters.json') 

class Funcio {

    suma() {return numJson.a + numJson.b}
    resta() {return numJson.a - numJson.b}
    multiplica() {return numJson.a * numJson.b}
  
  }

module.exports = Funcio;