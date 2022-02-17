class Marcador {

    constructor(nom) {
        this.nom = nom;

        if (typeof Marcador.instance === 'object') {
            return Marcador.instance
        }

        Marcador.instance = this;
        return this;

    }
}

module.exports =  Marcador;