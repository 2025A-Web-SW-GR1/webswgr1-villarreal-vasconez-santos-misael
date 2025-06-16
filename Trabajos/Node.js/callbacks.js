const fs = require('fs');

fs.readFile('./a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  console.log('Contenido original del archivo:', data);

  const nuevoContenido = data + new Date().toString();

  fs.writeFile('./a.txt', nuevoContenido, (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
      return;
    }

    console.log('Archivo actualizado correctamente');

    fs.readFile('./a.txt', 'utf-8', (err, dataActualizada) => {
      if (err) {
        console.error('Error al leer el archivo actualizado:', err);
      } else {
        console.log('Contenido actualizado del archivo:', dataActualizada);
      }
    });
  });
});
