const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('to', {
                alias: 'hasta',
                type: 'number',
                defult: 1,
                describe: 'Maximo valor a multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra el resultado de la tabla'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)) {
                    throw 'La base tiene que ser un numero'
                } else {
                    if(isNaN(argv.to)){
                        throw 'El maximo tiene que ser un numero'
                    }
                }
                return true            
            })
            .argv;

module.exports = argv;