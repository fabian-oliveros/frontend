process.stdout.write('Digita el numero a  verificar: ');
let num;
let inver;

process.stdin.on('data', (data) => {


    num = data.toString();

    console.log('Numero  ' + num);

    num.split('');

    console.log('Numero  array' + num);

 
    function invertirDigitos(num) {

        var inver = 0

        var res = num

        do {

            inver = inver * 10 + (res % 10)

            res = Math.floor(res / 10)

        } while (res > 0)

        return inver

    }

    inver = invertirDigitos(num);
    console.log('numeos invertidos: ' + inver);

    if (inver == num) {

        console.log('Si es capicúa');

    }else{

        console.log('No es capicúa');
    }
    process.exit();

});