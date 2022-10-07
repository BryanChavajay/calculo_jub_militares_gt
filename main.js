const yargs = require("yargs");
const color = require("colors");
const pdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = require("./fonts");
const styles = require("./styles");

yargs.command({
  command: "ingresar",
  describe: "Ingresa los datos para calcular la jubilacion",

  builder: {
    nombre: {
      describe: "Nombre del jubilado",
      demandOption: true,
      dafault: "Ingresa el nombre del jubilado",
      type: "string",
    },
    tiempo: {
      describe: "El numero de anios de servicio",
      demandOption: true,
      default: "Ingresa los anios de servicio del jubilado",
      type: "number",
    },
    sueldo: {
      describe: "El sueldo que devenga",
      demandOption: true,
      dafault: "Ingresa el sueldo que devenga el jubilado",
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv);
    calcular(argv.nombre, argv.tiempo, argv.sueldo);
  },
});

const calcular = function (nombre, tiempo, sueldo) {
  let jubilacion;

  console.log(
    color.blue("-----------------------------------------------------------")
  );
  console.log(
    color.blue("|") +
      color.yellow("          Tabla de Jubilación de Militares       ")
  );
  console.log(color.blue("|        Nombre             : " + nombre));
  console.log(color.blue("|        Tiempo de servicio : " + tiempo));
  console.log(color.blue("|        Sueldo mensual     : " + sueldo));

  switch (tiempo) {
    case 20:
      console.log(
        color.blue("|") +
          color.bgGreen("Jubilación         : " + `${sueldo * 0.5}`)
      );
      jubilacion = sueldo * 0.5;
      break;
    case 21:
      console.log(
        color.blue("|") +
          color.bgGreen("Jubilación         : " + `${sueldo * 0.54}`)
      );
      jubilacion = sueldo * 0.54;
      break;
    case 22:
      console.log(
        color.blue("|") +
          color.bgGreen("Jubilación         : " + `${sueldo * 0.58}`)
      );
      jubilacion = sueldo * 0.58;
      break;
    case 23:
      console.log(
        color.blue("|") +
          color.bgGreen("Jubilación         : " + `${sueldo * 0.62}`)
      );
      jubilacion = sueldo * 0.62;
      break;
    case 24:
      console.log(
        color.blue("|") +
          color.bgGreen("        Jubilación         : " + `${sueldo * 0.67}`)
      );
      jubilacion = sueldo * 0.67;
      break;
    case 25:
      console.log(
        color.blue("|") +
          color.bgGreen("       Jubilación         : " + `${sueldo * 0.72}`)
      );
      jubilacion = sueldo * 0.72;
      break;
    case 26:
      console.log(
        color.blue("|") +
          color.bgGreen("        Jubilación         : " + `${sueldo * 0.77}`)
      );
      jubilacion = sueldo * 0.77;
      break;
    case 27:
      console.log(
        color.blue("|") +
          color.bgGreen("        Jubilación         : " + `${sueldo * 0.82}`)
      );
      jubilacion = sueldo * 0.82;
      break;
    case 28:
      console.log(
        color.blue("|") +
          color.bgGreen("        Jubilación         : " + `${sueldo * 0.88}`)
      );
      jubilacion = sueldo * 0.88;
      break;
    case 29:
      console.log(
        color.blue("|") +
          color.bgGreen("        Jubilación         : " + `${sueldo * 0.94}`)
      );
      jubilacion = sueldo * 0.94;
      break;
    case 30:
      console.log(
        color.blue("|") +
          color.bgGreen("        Jubilación         : " + `${sueldo * 1}`)
      );
      jubilacion = sueldo;
      break;
    default:
      return console.log(
        color.blue("|") +
          color.bgRed(
            " El dato que ingreso no se encuentra en el listado legal"
          )
      );
  }
  console.log(
    color.blue("-----------------------------------------------------------")
  );

  let docDenition = {
    content: [
      { text: "CALCULO DE LA JUBILACION", style: "header" },
      { text: `Nombre: ${nombre}`, style: "label" },
      { text: `Tiempo de servicio: ${tiempo}`, style: "label" },
      { text: `Sueldo devengado: ${sueldo}`, style: "label" },
      { text: `Derecho de jubilacion: ${jubilacion}` },
    ],
    styles: styles,
  };

  const printer = new pdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(docDenition);
  pdfDoc.pipe(fs.createWriteStream("./pdfcalulojubilacion.pdf"));
  pdfDoc.end();
};
yargs.parse();
