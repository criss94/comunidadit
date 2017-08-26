const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia:  function(danio){
        if(this.energia > 0){
            if(danio < 0){
                return 'No puedes tener energia negativa';
            }else{
                this.energia = this.energia - danio;
                return 'Te quedan ' + this.energia + '% de energia';
            }
        }
    },
    recuperarEnergia:  function(energiaRecuperada){
        let sumarEnergia = this.energia + energiaRecuperada;
        if(sumarEnergia <= 100){
            this.energia = this.energia + energiaRecuperada;
            return 'Enegia recargada, ahora tienes: ' + this.energia+'%';
        }else{
            return 'la energia no puede pasar de los 100, ingrese un numero menor';
        }
    },
    perderVida:  function(quitarVida){
        if(quitarVida < 0 || quitarVida > 1){
            return 'no puedes quitar una vida negativa o quitar mas de 2 vidas';
        }else{
            this.vidas = this.vidas - quitarVida;
            return 'Te quedan: ' + this.vidas + ' vidas';
        }
    },
    recuperarVida:  function(agregarVida){
        let agregarVidas = this.vidas + agregarVida;
        if(agregarVida < 0 || agregarVida > 99 || agregarVidas > 99){
            return 'No puedes agregar una vida negativa o agregar mas de 99 vidas';
        }else{
            this.vidas = this.vidas + agregarVida;
            return 'Recuperaste: ' + agregarVida + ' vida(s), ahora tienes: ' + this.vidas + ' vidas';
        }
    }
}

jugador.nombre = 'cristian';

console.log(jugador.perderEnergia(40));
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
console.log(jugador.recuperarEnergia(0));
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
console.log(jugador.perderVida(6));
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
console.log(jugador.recuperarVida(10));
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
