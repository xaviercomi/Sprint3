const Joc = require('./joc.js');
const Jugador = require('./jugador.js');
                                                                                    
Jugador.creaJugador('Elrubius', 1234);
Jugador.creaJugador('Willrex', 4321);
Jugador.creaJugador('FuKuy', 5677);
Jugador.creaJugador('Vegetta777', 8776);
Jugador.creaJugador('TheGrefg', 1243);
Jugador.creaJugador('Alexby11', 7897);

const spectrum = new Joc("Spectrum")

spectrum.afegeixJugador({sobreNom:'El rubius'})
spectrum.afegeixJugador({sobreNom:'willrex'})
spectrum.afegeixJugador({sobreNom:'FuKuy'})
spectrum.afegeixJugador({sobreNom:'Vegetta777'})
spectrum.afegeixJugador({sobreNom:'TheGrefg'})
spectrum.afegeixJugador({sobreNom:'Alexby11'})

spectrum.afegeixPuntuacio({sobreNom:'El rubius',puntGuanyat: 1654, puntPerdut: 876})
spectrum.afegeixPuntuacio({sobreNom:'Willrex',puntGuanyat: 36546, puntPerdut: 456})
spectrum.afegeixPuntuacio({sobreNom:'FuKuy',puntGuanyat: 876765, puntPerdut: 546})
spectrum.afegeixPuntuacio({sobreNom:'Vegetta777',puntGuanyat: 4356, puntPerdut: 100})
spectrum.afegeixPuntuacio({sobreNom:'TheGrefg',puntGuanyat: 987, puntPerdut: 56})
spectrum.afegeixPuntuacio({sobreNom:'Alexby11',puntGuanyat: 345, puntPerdut: 10})


spectrum.afegeixJugador({sobreNom:'xavier'})
spectrum.afegeixPuntuacio({sobreNom:'xavier',puntGuanyat: 0, puntPerdut: 0})


const spectrum2 = new Joc("spectrum2")

spectrum2.afegeixJugador({sobreNom:'Sara'})
spectrum2.afegeixPuntuacio({sobreNom:'Sara',puntGuanyat: 0, puntPerdut: 0})

spectrum.afegeixJugador({sobreNom:'carles'})
spectrum.afegeixPuntuacio({sobreNom:'carles',puntGuanyat: 0, puntPerdut: 0})