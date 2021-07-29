const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//La linea process.argv contiene un array con los argumentos del comando que se ejecuta en la terminal
/*const [, , arg3 = 'base=5'] = process.argv;
console.log(argv);
const [, base = 5] = arg3.split("=");*/

crearArchivo( argv.b , argv.l, argv.to)
    .then( nombreArchivo => console.log( ` ${nombreArchivo} `))
    .catch( err => console.log( err ));