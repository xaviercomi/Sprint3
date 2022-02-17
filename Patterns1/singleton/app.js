const Joc = require('./joc.js');
const Jugador = require('./jugador.js');
                                                                                    

Jugador.creaJugador('Elrubius', 1234);
Jugador.creaJugador('Willrex', 4321);
Jugador.creaJugador('FuKuy', 5677);
Jugador.creaJugador('Vegetta777', 8776);
Jugador.creaJugador('TheGrefg', 1243);
Jugador.creaJugador('Alexby11', 7897);

Joc.afegeixjugador({sobrenom:'El rubios'},
                    {sobreNom:'willrex'},
                    {sobreNom:'FuKuy'},
                    {sobreNom:'Vegetta777'},
                    {sobreNom:'TheGrefg'},
                    {sobreNom:'Alexby11'});

Joc.afegeixPuntuacio({sobrenom:'El rubios',puntGuanyat: 1654, puntPerdut: 876},
                      {sobreNom:'willrex',puntGuanyat: 36546, puntPerdut: 456},
                      {sobreNom:'FuKuy',puntGuanyat: 876765, puntPerdut: 546},
                      {sobreNom:'Vegetta777',puntGuanyat: 4356, puntPerdut: 100},
                      {sobreNom:'TheGrefg',puntGuanyat: 987, puntPerdut: 56},
                      {sobreNom:'Alexby11',puntGuanyat: 345, puntPerdut: 10});




