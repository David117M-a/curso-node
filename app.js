// 5 * 1 = 5
// let multiplicador = 1;
// do 
// { 
//     console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
//     multiplicador++;
// }
// while(multiplicador <= 10);

//const { argv, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

/*const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');*/

//const base = 5;
console.clear();

if(argv.h != undefined)
{
    do {
        crearArchivo( argv.b, argv.l, argv.h )
            .then( nombreArchivo => console.log(nombreArchivo) )
            .catch( err => console.log( err ) );
        argv.b++;
    } while (argv.b <= argv.h);
}
else
{
    crearArchivo( argv.b, argv.l, argv.h )
        .then( nombreArchivo => console.log(nombreArchivo) )
        .catch( err => console.log( err ) );
}
