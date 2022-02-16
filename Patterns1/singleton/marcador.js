class Marcador {

    constructor(arrayMarcas) {
        this.arrayMarcas = arrayMarcas;

        if (typeof Marcador.instance === 'object') {
            return Marcador.instance
        }

        Marcador.instance = this;
        return this;

    }
}

export { Marcador };