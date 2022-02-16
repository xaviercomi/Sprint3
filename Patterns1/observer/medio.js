class Medio {
    constructor() {
      this.usuarios = [];
    }

    subscribe(usuario) {
      this.usuarios.push(usuario);
      console.log(usuario);
    };

    unsubscribe(usuario) {
        this.usuarios = this.usuarios.filter(
          (item) => item !== usuario
        );
        console.log(`${usuario.id}: subscripción eliminada!`);
      }

    notify(titulo, autor) {
      this.usuarios.forEach((item) => {
        item.reemision.call(item, titulo, autor);
      });
    }
  }

  export { Medio };