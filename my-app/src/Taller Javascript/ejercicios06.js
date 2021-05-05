console.log("Escribe el nuemro a verificar si es primo : ");

let num;
let primo = true;

process.stdin.on('data', function (d) {

     num = parseInt(d);

    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            primo = false
        }
      
    }

    if (primo == true) {
        console.log('El numero es primo');
    } else {
        console.log('El nuero no es primo');
    }
    
    process.exit();  

});