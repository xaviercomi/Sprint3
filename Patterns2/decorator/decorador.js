
var Conversor = function (articulo) {
    this.articulo = articulo;

    this.convert = function () {
        if (this.articulo.moneda === 'USD') {
            let dolar = this.articulo.precio * 0.819908;
            articulo.cambio_divisa = dolar.toFixed(2);
        } else if (this.articulo.moneda === 'GBP') {
            let libra = this.articulo.precio * 1.156661;
            articulo.cambio_divisa = libra.toFixed(2);
        } else if (this.articulo.moneda === 'CHF') {
            let fSuizo = this.articulo.precio * 0.913791;
            articulo.cambio_divisa = fSuizo.toFixed(2);
        } else if (this.articulo.moneda === 'JPY') {
            let yen = this.articulo.precio * 0.007515;
            articulo.cambio_divisa = yen.toFixed(2);
        } else if (this.articulo.moneda === 'CAD') {
            let dCanada = this.articulo.precio * 0.676626;
            articulo.cambio_divisa = dCanada.toFixed(2);;
        } else if (this.articulo.moneda === 'CNY') {
            let yuan = this.articulo.precio * 0.128563;
            articulo.cambio_divisa = yuan.toFixed(2);
        }    
    };
};

module.exports = Conversor