const argv = require('yargs') //argv es lo ultimo a obtener
              .option( 'b', {
                alias : 'base',
                type: 'number',
                demandOption: true,
                describe:'es la base de la tabla de multiplicar'
              }  )
              .option( 'l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe:'muestra la tabla en consola'
              } )
              .option( 'h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe:'es el limite hasta cuanto multiplicar'
              } )
              .check( (argv, options ) => {
                console.log("yargs", argv);//devuenve obj en el cual puedo hace validaciones antes de ejecutar mi programa si da err no ejecutara nada
                if( isNaN(argv.b) ||  isNaN(argv.h)){
                  throw 'La base tiene que ser un numero'
                }
                return true;//si no hay err
              } )
              .argv;//el producto argv,me interesa q del paquete extraiga el argv parecido al argv q vimos

//podria exportarlo como obj pero como usualmente el argv va ser la exportacion por defecto del archivo no voy tener nada mas.Loexporto x defecto
module.exports = argv;