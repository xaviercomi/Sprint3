import chalk from 'chalk';
import { Jugador } from './jugador.js';
import { Marcador } from './marcador.js';

function creaJugador(sobreNom, contrasenya) {

    const jugador = new Jugador(sobreNom, contrasenya)
    console.log(chalk.green(`Nou jugador creat: ${jugador.sobreNom}`));
    inscriureJugador(jugador);

};

function inscriureJugador(jugador) {
    
    joc.jugador.push(jugador);
    console.log(chalk.green.underline(`Nou jugador inscrit: ${jugador.sobreNom}\n`));
    
};

let joc = {
    jugador: [],
    puntuacio: [],
    marcaJugador: [],
    guanyador: function () {

        let maxPunts = this.puntuacio[0]
        for(let i in this.puntuacio) {
            if (this.puntuacio[i] > maxPunts) {
                maxPunts = this.puntuacio[i];
                let guanyador = this.jugador[i].sobreNom;
                console.log(chalk.yellow.bgMagenta(`\n${guanyador}: [punts ${maxPunts}] Guanyador!!\n`));
            }
                
        }
    },
    inscripcions: function() {

        console.log(chalk.bgBlue.black(' <<< Llistat jugadors >>> \n'));
        for(let i = 0; i < this.jugador.length; i++) { 
            console.log(chalk.blue(`${this.jugador[i].sobreNom} : punts[${this.puntuacio[i]}]`)); 
        } 
    },
    actualitzaMarcador: function() {            // Aquesta funció entra les dades dels jugadors al array marcaJugador.
 
        this.marcaJugador.push({nom:'El rubios',puntGuanyat: 1654, puntPerdut: 876},
                                {nom:'willrex',puntGuanyat: 36546, puntPerdut: 456},
                                {nom:'FuKuy',puntGuanyat: 876765, puntPerdut: 546},
                                {nom:'Vegetta777',puntGuanyat: 4356, puntPerdut: 100},
                                {nom:'TheGrefg',puntGuanyat: 987, puntPerdut: 56},
                                {nom:'Alexby11',puntGuanyat: 345, puntPerdut: 10} );

        let marcador = new Marcador(this.marcaJugador);                     // Instància de la classe Marcador amb l'array marcaJugador com a parametre.   

        console.log(chalk.red.underline.bgWhiteBright(' << Nou marcador >>\n'));
        for(let j in marcador) {                                                    // Bucle que recorre l'objecte marcador i mostra per consola els objectes de l'array marcaJugador
            console.log(marcador);                                          
        }   

        let marcador2 = new Marcador(this.marcaJugador);                            // Nova instàcia de la classe Marcador amb l'array marcaJugador com a parametre 
        console.log(chalk.red.underline.bgWhiteBright(' << Nou marcador >>\n'));    // Retorna el mateix resultat que la instància marcador.
        for(let k in marcador2) {    
            console.log(marcador2);
        }  
        
        let marcador3 = new Marcador();                                             // Nova instàcia de la classe Marcador SENSE l'array marcaJugador com a parametre 
        console.log(chalk.red.underline.bgWhiteBright(' << Nou marcador >>\n'));    // Retorna el mateix resultat que la instància marcador.
        for(let l in marcador3) {    
            console.log(marcador3);
        }  

        this.marcaJugador.push({nom:'El rubios',puntGuanyat: 0, puntPerdut: 0},     // Entrada de nou marcador.
                                {nom:'willrex',puntGuanyat: 0, puntPerdut: 0},
                                {nom:'FuKuy',puntGuanyat: 0, puntPerdut: 0},
                                {nom:'Vegetta777',puntGuanyat: 0, puntPerdut: 0},
                                {nom:'TheGrefg',puntGuanyat: 0, puntPerdut: 0},
                                {nom:'Alexby11',puntGuanyat: 0, puntPerdut: 0} );
                                                                                    
        console.log(chalk.red.underline.bgWhiteBright(' << Nou marcador >>\n'));    // Retorna el mateix resultat que la instància marcador amb les noves dades.
        for(let l in marcador) {    
            console.log(marcador);
        }  
        
        let marcador4 = new Marcador();                                             // Nova instàcia de la classe Marcador SENSE l'array marcaJugador com a parametre 
        console.log(chalk.red.underline.bgWhiteBright(' << Nou marcador >>\n'));    // Retorna el mateix resultat que la instància marcador.
        for(let l in marcador4) {    
            console.log(marcador4);
        }  

        console.log(chalk.red.underline.bgWhiteBright(' << Nou marcador >>\n'));    // Instància 2 retorna el mateix resultat que la instància marcador amb les noves dades.
        for(let l in marcador2) {    
            console.log(marcador2);
        }  
    }               
};  

(function insertaDades() {

    creaJugador('Elrubius', 1234);
    creaJugador('Willrex', 4321);
    creaJugador('FuKuy', 5677);
    creaJugador('Vegetta777', 8776);
    creaJugador('TheGrefg', 1243);
    creaJugador('Alexby11', 7897);

    joc.puntuacio.push(12345);
    joc.puntuacio.push(9234);
    joc.puntuacio.push(3455);
    joc.puntuacio.push(104876);
    joc.puntuacio.push(7896);
    joc.puntuacio.push(9878);

    joc.inscripcions();
    joc.guanyador();
    joc.actualitzaMarcador();

})();






