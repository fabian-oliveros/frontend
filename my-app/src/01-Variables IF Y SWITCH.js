

//variable y constantes 
console.log('Alcanse de variables:');


var variableGlobal = 'Variable de alcanse Global: ';
const varConstante = 'constante  durante ejecucion';
let varLetLocal = 'ABC';
let varLetNUMERO = 1112;

console.log('variable global 1.' + variableGlobal);
console.log('constante = ' + varLetLocal);



{
    variableGlobal = 'otro valor';
    console.log('variable global 2.' + variableGlobal);
    let varLetLocal = 'xyz';
    console.log('letlocal:' + varLetLocal);


}

let evalucionif = true;
if (evalucionif) {
    console.log('dentro del IF');
    let numY = 11;
    let numX = 76;

    console.log('opreracion * = ' + (numX * numY));
} else {
    console.log('estamos en el else');
}


console.log('+----------------selector---------------+');
let letKey = 2;
switch (letKey) {

    case 1:
        console.log('caso para 1');
        break;
    case 2:
        console.log('caso para 2');
        break;
    case 3:
        console.log('caso para 3');
        break;

    default:
        console.log('valor no determinado ');
        break;
}









