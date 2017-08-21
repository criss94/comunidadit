function mejorJugadorArgentino(numero) {

    let nombre = '';
    switch (numero) {
        case 18:
            return nombre = 'Nery Pumpido';
            break;
        case 5:
            return nombre = 'José Luis Brown';
            break;
        case 9:
            return nombre = 'José Cuciuffo';
            break;
        case 19:
            return nombre = 'Óscar Ruggeri';
            break;
        case 14:
            return nombre = 'Ricardo Giusti';
            break;
        case 16:
            return nombre = 'Julio Olarticoechea';
            break;
        case 2:
            return nombre = 'Sergio Batista';
            break;
        case 12:
            return nombre = 'Héctor Enrique';
            break;
        case 7:
            return nombre = 'Jorge Burruchaga';
            break;
        case 10:
            return nombre = 'Diego Armando Maradona';
            break;
        case 11:
            return nombre = 'Jorge Valdano';
            break;

        default:
            return nombre = 'Ese jugador todavia no nació';
            break;
    }
}

console.log(mejorJugadorArgentino(11));