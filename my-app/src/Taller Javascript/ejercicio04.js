var readline = require('readline');

var entr = readline.createInterface(process.stdin, process.stdout);


let resultados;

let control = 0;



entr.question('digite un numero ', (respuesta) => {



    resultados = respuesta.toString().trim();




    entr.setPrompt('Digito a buscar: ');

    entr.prompt();



});



entr.on('line', (input) => {



    if (input.trim() === 'salir') {



        console.log('Fin: ' + input);

        console.log('Fin Result: ' + resultados);



        process.exit();

    }





    resultados.split('');

    console.log('Input: ' + input);

    for (let index = 0; index < resultados.length; index++) {

        if (input == resultados[index]) {

            console.log('Si esta');

        }



        if (input != resultados[index]) {

            if (control == 0) {

                console.log('No esta');

            }



        }

        control = 1;

    }



    entr.setPrompt('¿Desea salir?: ');

    entr.prompt();

});