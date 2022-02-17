
class Middle {
  constructor(target) {
    this.target = target;
    this.middlewares = []
    this.req = {};


    const prototype = Object.getPrototypeOf(this.target);
    Object.getOwnPropertyNames(prototype).forEach( fn => {
      if (fn !== "constructor") return this.creaFuncio(fn);
    });
  }

  usa(fn) {
      this.middlewares.push(fn); 
      console.log("middleware added");
  }
  
  executa(index) {
    if (index < this.middlewares.length) {
      this.middlewares[index].call( this, () => this.executa(index + 1) );
    }
  }
  
  creaFuncio(fn) {
    this[fn] = args => {
      this.req = args;
      this.executa(0);
      return this.target[fn].call(this, this.req);
    };
  }
}

module.exports = Middle;


