const fs = require("fs");
const chalk = require("chalk");

const guardarSaludo = (nombre) => {

  fs.writeFile("./textos/saludo.txt", `Hola, ${nombre}. Encantado de saludarte.`, (err) => {
    if (err) {
      console.log(chalk.red.bold("Error creando/modificando el archivo txt"));
      process.exit(1);
    }
    console.log(chalk.green.bold("Archivo creado con éxito"));
  });
};

module.exports = guardarSaludo;
