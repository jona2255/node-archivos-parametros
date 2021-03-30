const guardarSaludo = require("./utilidades/archivos");
const chalk = require("chalk");

const parametros = process.argv.slice(2);

/* El if sirve para comprobar si le has pasado el parametro --nombre.
 Si le has pasado más de un parámetro, solo te pasa el parametro del nombre  */
if (parametros.toString().split("=").toString().split(",").includes("--nombre")) {
  parametros.find(parametro => {
    if (parametro.includes("--nombre=")) {
      guardarSaludo(parametro.split("=")[1]);
    }
  });
} else {
  console.log(chalk.yellow.bold("No se ha enviado un nombre"));
  process.exit(1);
}


