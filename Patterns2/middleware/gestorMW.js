
class Middle {
  constructor(fn) {
    this.middlewares = []
  }

  use(fn) {
      this.middlewares.push(fn); 
      console.log("middleware added");
  }
  
  execute(index) {
    if (index < this.middlewares.length) {
      this.middlewares[index].call(this, () => this.execute(index + 1) )
    }
  }

}



module.exports = Middle;


