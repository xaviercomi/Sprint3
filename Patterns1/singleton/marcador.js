class Marcador {

    constructor(jugador) {
        this.jugador = [jugador];

        if (typeof Marcador.instance === 'object') {
            return Marcador.instance
        }

        Marcador.instance = this;
        return this;

    }
}

module.exports =  Marcador;