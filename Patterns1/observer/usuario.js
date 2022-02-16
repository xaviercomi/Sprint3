class Usuario {
    constructor(id) {
      this.id = id;
      console.log('Usuario creado' + id);
    }
    reemision(titulo, autor) {
      console.log(`Usuario ${this.id} recibió un mensaje nuevo: ${titulo} by: ${autor}`);
    };
  };

  export { Usuario };