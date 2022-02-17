

class Jugador {

    constructor (sobreNom, contrasenya) {
        this.sobreNom = sobreNom;
        this.contrasenya = contrasenya;
    }

    creaJugador(sobreNom, contrasenya) {
        const jugador = new Jugador(sobreNom, contrasenya);
        console.log(`Nou jugador creat: ${jugador.sobreNom}`);
    }
}

module.exports = Jugador