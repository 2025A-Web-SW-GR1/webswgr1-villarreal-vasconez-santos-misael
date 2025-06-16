const fs = require('fs');

const rutaArchivo = './a.txt';

const leerArchivo = (ruta) => {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (errorLectura, contenido) => {
            if (errorLectura) {
                reject('Error al leer el archivo: ' + errorLectura);
            } else {
                resolve(contenido);
            }
        });
    });
}

const escribirArchivo = (ruta, contenido) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(ruta, contenido, (errorEscritura) => {
            if (errorEscritura) {
                reject('Error al escribir el archivo: ' + errorEscritura);
            } else {
                resolve('Archivo actualizado correctamente');
            }
        });
    });
}

leerArchivo(rutaArchivo)
    .then(contenido => {
        console.log('Contenido original del archivo: ', contenido);

        const nuevoContenido = contenido + '\n' + new Date().toString();

        return escribirArchivo(rutaArchivo, nuevoContenido);
    })
    .then(mensaje => {
        console.log(mensaje);

        return leerArchivo(rutaArchivo);
    })
    .then(contenidoActualizado => {
        console.log('Contenido actualizado del archivo: ', contenidoActualizado);
    })
    .catch(error => {
        console.error(error);
    });
