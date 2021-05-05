var readline = require('readline');

var entrada = readline.createInterface(process.stdin, process.stdout);

let resul;


entrada.question('digite numeros para saber cual es es mayor: ', (respuesta) => {
    
    resul = respuesta.toString().trim();   
    resul= Math.max(...resul);
    console.log('el numero mayor es : '+ resul);

    entrada.close();

});