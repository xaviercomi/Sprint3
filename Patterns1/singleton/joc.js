
const Marcador = require("./marcador");

class Joc {

    constructor(nombre) {
        this.nombre = nombre; 
        this.jugador = []
        this.marcador = new Marcador();
    }

    afegeixJugador(jugador) {
        
        this.marcador.jugador.push(jugador);
        console.log(`Nou jugador inscrit: ${jugador.sobreNom}\n`);
        console.log(' <<< Llistat jugadors >>> \n');
        for(let i = 0; i < this.jugador.length; i++) { 
            console.log(`${this.jugador[i].sobreNom} : punts[${this.marcador.puntuacio[i]}]`); 

        }
    }

    afegeixPuntuacio(puntuacio) {

        this.marcador.puntuacio.push(puntuacio)
        console.log(`Marcadors actualitzats: ${jugador.sobreNom}\n`);
        console.log(' <<< Marcado >>> \n');
        for(let i = 0; i < this.jugador.length; i++) { 
            console.log(`${this.jugador[i].sobreNom} : punts[${this.marcador.puntuacio[i]}]`); 

        }

    }
    
};
    

module.exports = Joc