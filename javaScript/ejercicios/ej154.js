const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(danio){
        if (typeof danio !== "number" || isNaN(danio) || danio < 0) {
            return;
        }
        this.energia -= danio;
        if(this.energia < 0){
            this.energia = 0;
        }
        
    },
    recuperarEnergia: function(energiaRecuperada){
        if (typeof energiaRecuperada !== "number" || isNaN(energiaRecuperada) || energiaRecuperada < 0) {
            return;
        }
        this.energia += energiaRecuperada;
        if(this.energia > 100){
            this.energia = 100;
        }
        
    },
    perderVida: function(vidasPerdidas){
        if (typeof vidasPerdidas !== "number" || isNaN(vidasPerdidas) || vidasPerdidas < 0) {
            return;
        }
        this.vidas -= vidasPerdidas;
        if(this.vidas < 0){
            this.vidas = 0;
        }
    },
    recuperarVida: function(vidasRecuperadas){
        if (typeof vidasRecuperadas !== "number" || isNaN(vidasRecuperadas) || vidasRecuperadas < 0) {
            return;
        }
        this.vidas += vidasRecuperadas;
        if(this.vidas > 99){
            this.vidas = 99;
        }
    }
};
jugador.nombre = "Nestor";
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderEnergia(10);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderEnergia(5);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderEnergia(15);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderEnergia(20);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.recuperarEnergia(10);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderEnergia(30);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderEnergia(40);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.recuperarVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.recuperarVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.recuperarVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energia y ${jugador.vidas} vidas`);