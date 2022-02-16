
const middle = require('./middle')

const handlerMW = () => {
  const middlewares = []

  const append = (fn) => {
    middlewares.push(fn); 
    console.log("middleware added");
  };
  
  const execute = index =>  {
    if (index < middlewares.length) {
      middlewares[index].call(middle(),  () => execute(index + 1) )
    }
  }  

  const run = () => {
    execute(0)
  }

  return { run, append }
}

module.exports = handlerMW();


