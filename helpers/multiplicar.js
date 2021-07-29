const fileSystem = require('fs');
const colors = require('colors');

//Forma natural para regresar un objeto Promise
/*const crearArchivo = ( base = 5 ) => {  
    return new Promise (( resolve, reject ) => {
        console.log('================');
        console.log(`  Tabla del: ${ base }  `);
        console.log('================');
        
        let salida = '';
        for( let i = 1; i <= 10; i++ ) {
            salida += ` ${ base } x ${ i } = ${ base * i}\n`;
        }
        
        fileSystem.writeFileSync( `tabla-${ base }.txt` , salida);
        
        resolve(`tabla-${ base }.txt`);
    });
}*/

//Forma async para regresar un objeto Promise
const crearArchivo = async( base = 5, listar = false, to = 1) => {  
    
    try{
        let salida, consola = '';
        for( let i = 1; i <= to; i++ ) {
            salida += ` ${ colors.blue(base) } ${'x'.red} ${ colors.blue(i) } ${'='.red} ${ colors.blue(base * i)}\n`;
            consola += ` ${ base } x ${ i } = ${ base * i}\n`;
        }
        
        if(listar) {
            console.log('================'.green);
            console.log(`  Tabla del: ${ base }  `);
            console.log('================'.green);
            console.log(salida);
        }

        fileSystem.writeFileSync( `./salida/tabla-${ base }.txt` , consola);
        
        return `tabla-${ base }.txt creada`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    //crearArchivo : crearArchivo -> Se considera redudante en ECMASCRIPT 6
    //Por lo tanto solo basta con colocar el nombre de la propiedad como el mismo nombre del atributo o funcion
    crearArchivo
}