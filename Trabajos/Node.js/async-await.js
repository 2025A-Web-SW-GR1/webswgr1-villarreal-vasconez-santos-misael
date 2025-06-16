const fs = require('fs');
const rutaArchivo = './a.txt';

const leerArchivo = (ruta) =>
  new Promise((resolve, reject) => {
    fs.readFile(ruta, 'utf-8', (err, data) =>
      err ? reject('Error al leer el archivo: ' + err) : resolve(data)
    );
  });

const escribirArchivo = (ruta, contenido) =>
  new Promise((resolve, reject) => {
    fs.writeFile(ruta, contenido, (err) =>
      err ? reject('Error al escribir el archivo: ' + err) : resolve('Archivo actualizado correctamente')
    );
  });

const actualizarArchivo = async () => {
  try {
    const contenido = await leerArchivo(rutaArchivo);
    console.log('Contenido original del archivo:', contenido);

    const nuevoContenido = contenido + ' ' + new Date().toString();
    await escribirArchivo(rutaArchivo, nuevoContenido);

    console.log('Archivo actualizado correctamente');

    const contenidoActualizado = await leerArchivo(rutaArchivo);
    console.log('Contenido actualizado del archivo:', contenidoActualizado);
  } catch (error) {
    console.error(error);
  }
};

actualizarArchivo();
