import { Medio } from './medio.js';
import { Usuario } from './usuario.js';
import EventEmitter from 'events';
const estacionMeteo = new EventEmitter;

// *! Intento 1
console.log();
console.log('____________________ Intento1 ______________________\n')

// Registro de oyentes

estacionMeteo.on('temperatura', (grados, ciudad) => {
    if (grados < 30) {
    console.log(`La temperatura es de: [${grados}º c] en ${ciudad}`);
    };
});

estacionMeteo.on('temperatura', (grados, ciudad) => {
    if (grados > 30 && ciudad === 'Barcelona') {
        console.log(`Alerta! Temperatura molt alta a ${ciudad}`)
    };
});

estacionMeteo.on('temperatura', (grados, ciudad) => {
    if (grados > 30 && ciudad != 'Barcelona') {
    console.log(`Alerta! temperaturas muy altas: [${grados}º c] en ${ciudad}`);
    };
});

// Eventos emitidos 

estacionMeteo.emit('temperatura', 25, 'Barcelona');
estacionMeteo.emit('temperatura', 35, 'Sevilla')
estacionMeteo.emit('temperatura', 32, 'Barcelona');
estacionMeteo.emit('temperatura', 17, 'Madrid');
estacionMeteo.emit('temperatura', 12, 'Bilbao');
estacionMeteo.emit('temperatura', 34, 'Madrid'); 

// !Intento 2
console.log();
console.log('____________________ Intento2______________________\n');


const codeLine = new Medio();

const usuario1 = new Usuario('Tunnig');
const usuario2 = new Usuario('Gates');
const usuario3 = new Usuario('Jobs');
const usuario4 = new Usuario('Torvalds');

console.log("usuarios subscritos");

codeLine.subscribe(usuario1);
codeLine.subscribe(usuario2);
codeLine.subscribe(usuario3);

codeLine.notify('¿React libreria o framework?', 'Hamza');
codeLine.notify('facebook para la tercera edad', 'Zuckerberg');
codeLine.notify('¿Que es Java?','Gosling');

codeLine.subscribe(usuario4);

codeLine.notify('Iniciacion a Linux', 'Torvalds');

codeLine.unsubscribe(usuario1);

codeLine.notify('GIT para principiantes', 'Linus');