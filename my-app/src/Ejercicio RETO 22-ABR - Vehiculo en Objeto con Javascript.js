let carro = {
    estadoActivoMotor: false,
    carroOn: 'Encendiendo',
    capacidadTanque: 3,
    estadoTanque: 0,
    tamanRin: 15,
    distanciaRin: 0,
    vel: 0,
    kmDistancia: 10,
    encender() {
        if (this.estadoActivoMotor == true) {
            console.log('El carro está encendido');
        } else {
            this.verificarCantCombustible();
        }
    },
    verificarCantCombustible() {
        console.log(this.estadoTanque);
        if (this.estadoTanque >= 2) {
            console.log(this.estadoTanque);
            this.estadoActivoMotor = true;
            console.log(`El carro está ${this.carroOn}`);
        } else {
           
            console.log(`Litros de Combustible: ${this.estadoTanque}`);
            if (this.estadoTanque >= 2) {
                console.log(`El carro está encendiendo`);
            } else {
                this.estadoTanque = Math.round(Math.random() * 30);
                console.log(`Se ha tanqueado el carro con: ${this.estadoTanque} ltrs`);
                console.log(this.estadoTanque);
                if (this.estadoTanque < 2) {
                    console.log(`El carro está apagado`);
                    this.verificarCantCombustible();
                } else {
                    console.log(`El carro está encendiendo`);
                    this.recorridoRin();
                    this.aceleracion();
                }
            }
        }
    },
    recorridoRin() {
        this.distanciaRin = this.tamanRin * 2 * Math.PI;
        console.log(`La distancia que recorrer con el rin es: ${this.distanciaRin} Km`);
    },
    aceleracion() {
        let n = 0;
        let incremento = 0;
        this.vel = Math.round(Math.random() * 20);
        
        while (this.estadoTanque >= 2 && this.vel != 0) {
            if (n == 0) {
                console.log(`el carro acelera: ${this.vel} `);
            }
            console.log(`la aceleracion del auto es : ${this.vel}
            aumento: ${incremento}
            Tanque bajo de nivel: ${this.estadoTanque}`);
            n++;
            incremento++;
            this.estadoTanque--;
            this.vel--;
            console.log(`mensaje 2`);
            console.log(`aceleracion: ${this.vel}
            aumento: ${incremento}
            Tanque bajo de nivel: ${this.estadoTanque}`);
 
        }
        console.log(`La distancia recorrida fue:
         ${this.kmDistancia += parseInt((this.kmDistancia * this.distanciaRin)*this.vel)} KM`);
        if (this.estadoTanque < 2) {
            console.log(`el carro se apagado`);
        }
    }
}
carro.estadoTanque = 1;
carro.encender();
