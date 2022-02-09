const amqp = require('amqplib');

async function conecta(nombreCanal) {
     try {
        const conexion = await amqp.connect('amqp://localhost:5672');
        const canal = await conexion.createChannel();
        const resultado = await canal.assertQueue(nombreCanal);
        
        canal.consume(nombreCanal, mensaje => {
            const msg = console.log(mensaje.content.toString());
        });

        console.log('Esperando noticias...');

     }
     catch (ex) {
         console.error(ex);
     }
};

conecta('NoticiasPRO');