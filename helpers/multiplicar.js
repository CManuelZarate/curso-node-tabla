const fs =require('fs');//tengo lo q necesito para guardar
const colors = require('colors');
const crearArchivo = async( base=5, listar=false, hasta=10 ) => {

  
  /* return new Promise( (resolve,reject) => {
    console.log(`=================`);
    console.log(`   Tabla del ${base}`);
    console.log(`=================`);
    let salida = '';
  
    for (let i = 0; i < 10; i++) {
      salida += `${base} X ${i+1} = ${base*(i+1)}\n`;
    }
    console.log(salida);
  
    fs.writeFileSync(`tabla-${base}.txt`,salida);//es sincrono La unica diferencia SI SUCEDE UN ERROR TENDRIAMOS Q ATRAPARLO MEDIANTE U NTRY CATH
    resolve(`tabla-${base}.txt`); 
  } ); */

  //otra manera
  try {
    let salida, consola = '';

    for (let i = 0; i < hasta; i++) {
      salida += `${base} X ${i+1} = ${base*(i+1)}\n`;
      consola += `${base} ${'X'.green} ${i+1} ${'='.green} ${base*(i+1)}\n`;
    }
    if( listar ){

      console.log(`=================`.green);
      //console.log(`   Tabla del ${base}`.bgGrey);
      console.log('   Tabla del '.green,colors.blue(base));
      console.log(`=================`.green);
      console.log(consola);
    }
  
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);//es sincrono La unica diferencia SI SUCEDE UN ERROR TENDRIAMOS Q ATRAPARLO MEDIANTE U NTRY CATH
    return `tabla-${base}.txt`; 
    
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}  //modulo obj global q existe en node, = alo q quieran exportar en mi caso queiro exportar un obj q va tener prop "funcion"