const amqp = require('amqplib');

async function conecta(nombreCanal, mensaje) {
     try {
        const conexion = await amqp.connect('amqp://localhost:5672');
        const canal = await conexion.createChannel();
        const resultado = await canal.assertQueue(nombreCanal);
        canal.sendToQueue(nombreCanal, Buffer.from(mensaje));
        console.log('Mensaje enviado con exito!')
     }
     catch (ex) {
         console.error(ex);
     }
};

class Publisher {
    constructor(nombreCanal, mensaje) {
        this.nombreCanal = nombreCanal;
        this.mensaje = mensaje;
        conecta(nombreCanal, mensaje);
    };

    
};

noticia1 = new Publisher('NoticiasPRO', 'NoticiasPRO: La lava esta muy caliente');
noticia2 = new Publisher('NoticiasPRO', 'NoticiasPRO: Altas temperaturas en algun lugar');
noticia3 = new Publisher('NoticiasPRO', 'NoticiasPRO: Politicos corruptos');
noticia4 = new Publisher('NoticiasPRO', 'NoticiasPRO: Impuestos altos');
noticia5 = new Publisher('NoticiasPRO', 'NoticiasPRO: Todo bien');
