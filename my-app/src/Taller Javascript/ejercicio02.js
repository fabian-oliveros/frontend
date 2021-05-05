

console.log("Escribe los numeros a sumar ");
let stdin = process.openStdin();


stdin.addListener('data', function (d) {


    let s = parseInt(d);
    console.log('la suma de los nuemro es:' ,s.toString().split('').reduce(function (r, n) { return r + parseInt(n) }, 0));
    process.exit();
});

