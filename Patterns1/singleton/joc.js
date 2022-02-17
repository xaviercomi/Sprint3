
const Marcador = require("./marcador");

class Joc {

    constructor(nom) {
        this.nom = nom; 
        this.jugador = []
        this.marcador = [new Marcador(this.nom)];
    }

    afegeixJugador(jugador) {
        
        this.jugador.push(jugador);
        console.log(jugador)
        console.log(`Nou jugador inscrit: ${JSON.stringify(jugador.sobreNom)}\n`);
        console.log(' <<< Llistat jugadors >>> \n');
        for(let i = 0; i < this.jugador.length; i++) { 
            console.log(`${JSON.stringify(this.jugador[i].sobreNom)}`); 

        }
    }


    afegeixPuntuacio(punts) {

        this.marcador.push(punts);
        console.log(`Marcadors actualitzats: ${JSON.stringify(punts.sobreNom)}\n`);
        console.log(' <<< Marcador >>> \n');
        for(let i = 0; i < this.marcador.length; i++) { 
            console.log(`${JSON.stringify(this.marcador[i])}`); 

        }

    }
    
};
    

module.exports = Joc