
class Jugador {

    constructor (sobreNom, contrasenya) {
        this.sobreNom = sobreNom;
        this.contrasenya = contrasenya;
    }

    static creaJugador(sobreNom, contrasenya){
        this.jugador = new Jugador(sobreNom, contrasenya);
        console.log(`Nou jugador creat: ${this.jugador.sobreNom}`);
    }
}

module.exports = Jugador