console.log('+----------------BUCLES---------------+');
let limiteBucle = 10;
let contador = 0;

console.log('+Bucle: do while:');
do {
    contador++;
    console.log('contador:' + contador);

} while (contador < limiteBucle);

console.log('+Bucle: do while:');
let letCondicion = true;
let acumulado=0;
let cont = 0;

while (letCondicion) {
    cont++;
    console.log('salida contador  ' + cont);
    let letRandom = Math.random() * 10;
    console.log('NUMERO RAMDOMICO: ' + letRandom);
    if (letRandom > 8) {
        letCondicion = false;
        console.log('salida de bucle ' + letCondicion);
    }
   acumulado = acumulado + letRandom;
   console.log('suma ' + acumulado);
}



console.log('+Bucle for:');
let limifor= 30;


for(let index = 0;index <   limifor ;index++){
    let letRandomfor = Number.parseInt((Math.random() * 10),10);
    console.log('indice for '+ index);
    console.log('ramdom '+ letRandomfor);

}


