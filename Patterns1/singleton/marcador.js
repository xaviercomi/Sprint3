class Marcador {

    constructor() {
        this.jugador = jugador;
        this.puntuacio = puntuacio;

        if (typeof Marcador.instance === 'object') {
            return Marcador.instance
        }

        Marcador.instance = this;
        return this;

    }
}

export { Marcador };