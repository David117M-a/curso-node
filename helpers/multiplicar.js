const fs = require('fs');
require('colors');

const crearArchivo = async (base = 1, listar) => {
    try{
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= 10; i++) {
            consola += `${base} x ${i} = ${base * i}\n`;
            salida += `${base} `.red + `x`.yellow + ` ${i}`.red + ` = `.yellow + `${base * i}\n`.green;
        }
    
        if(listar){
            console.log("=====================".green);
            console.log(`  TABLA DEL ${base}  `.rainbow);
            console.log("=====================".green);
            console.log(salida);
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
    
        return `tabla-${base}.txt created!`.bgGreen.black;
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}