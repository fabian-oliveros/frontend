console.log("Escribe el numero a invertir");
let stdin = process.openStdin();

stdin.addListener('data', function (d) {

  //  d = parseInt(d);
     let s = parseInt(d);
     console.log(`El nnumero invertido es:  ${s.toString().split('').reverse().join('').trim()}`);

        process.exit();
});


