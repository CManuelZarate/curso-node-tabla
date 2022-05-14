const { crearArchivo } = require('./helpers/multiplicar');//regresa el obj y desestructuro
const argv = require('./config/yargs');

const colors = require('colors');
//option('l')
//listar
//boolean
//opcional valor defecto falso
//mandar como argumento ese l a crear arch si llistar esta true imprimen log(salida), sino no salida


//node app -b 8 -l
//node app -b 8 -l false




console.clear();

//console.log(process.argv);// imprimimos los 2 tipos de argv q tengo en este momento
//36quitamos//console.log(argv);

/* const [,,arg3 = 'base=5'] = process.argv;
const [ ,base=5 ] = arg3.split('=');
console.log(base);//argv como los argumentos q viene de la consola */

/* let base =5; */

crearArchivo( argv.b , argv.l ,argv.h )
  .then( nombreArchivo => console.log(nombreArchivo.rainbow,"creado") )
  .catch( err => console.log(err) );


//si no ponen el path va tomar como base la carpeta donde se ejecuta este arch node,en este caso app.js, viene las opciones mando la salida,finalmente un callback q se dipara con el err

/* fs.writeFile(`tabla-${base}.txt`,salida,(err) => {
  if(err) throw err;//lo imprimo
}); */
