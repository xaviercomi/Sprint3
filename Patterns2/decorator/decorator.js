// Pattern decorator

const Conversor = require('./decorador')

var Articulo = function (articulo, precio, moneda, cambio_divisa) {
    this.articulo = articulo;
    this.precio = precio;
    this.moneda = moneda;
    this.cambio_divisa = cambio_divisa;

    this.printArticulo = function () {
        console.log('_________________________________________________');
        console.log("\nArticulo: " + this.articulo + '\nPrecio: ' + this.precio + '\nMoneda: ' + this.moneda + '\ncambio_divisa: ' + this.cambio_divisa + ' €');
    };
}


function run() {

    let articulo = new Articulo("portatil", 2225.35, 'USD');
    let decorado = new Conversor(articulo);
    decorado.convert();
    articulo.printArticulo();

    let articulo1 = new Articulo("mouse", 35.45, 'GBP');
    let decorado1 = new Conversor(articulo1);
    decorado1.convert();
    articulo1.printArticulo();
    
    let articulo2 = new Articulo("monitor", 300, 'CHF');
    let decorado2 = new Conversor(articulo2);
    decorado2.convert();
    articulo2.printArticulo();

    let articulo3 = new Articulo("teclado", 2500, 'CNY');
    let decorado3 = new Conversor(articulo3);
    decorado3.convert();
    articulo3.printArticulo();
    
    let articulo4 = new Articulo("portatil", 145.35, 'CAD');
    let decorado4 = new Conversor(articulo4);
    decorado4.convert();
    articulo4.printArticulo();
    

    let articulo5 = new Articulo("portatil", 122875.35, 'JPY');
    let decorado5 = new Conversor(articulo5);
    decorado5.convert();
    articulo5.printArticulo();

    let articulo6 = new Articulo("portatil", 200, 'CNY');
    let decorado6 = new Conversor(articulo6);
    decorado6.convert();
    articulo6.printArticulo();
};

run();