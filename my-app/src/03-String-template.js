console.log('+------------------String template-----------------+');
const apellido ='oliveros';
let nombre = 'hector fabian';

let variablenum=22;

let stringTemplate=(`STRING TEMPLATE: señor ${apellido}  su multiplicacion es:  ${variablenum*7}`);
console.log(stringTemplate);




console.log(`llamado funcion template ->>>>${fx_randomico('XYZ')}`);

function fx_randomico(parmString){

    return `numero  ramdom ${Math.random() * 100}  parametro >>>>${parmString}`;
}

