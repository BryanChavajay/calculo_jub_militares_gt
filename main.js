//Empecé aquí
const yargs = require('yargs');

const color = require('colors');


yargs.command({
    command: 'validar',
    describe: 'Validación de los jubilados',

    builder: {
        nombre: {
            describe: 'codigo del usuario',
            demandOption: true,
            dafault: "Ingresa el codigo",
            type: 'string'
        },
        tiempo: {
            describe: 'nombre del usuario',
            demandOption: true,
            default: "Ingresa el nombre",
            type: 'string'
        },
        sueldo: {
            describe: 'codigo del usuario',
            demandOption: true,
            dafault: "Ingresa el codigo",
            type: 'string'
        }
    },
    handler: function(argv){
        //console.log(argv)
        validaUsuario(argv.nombre,argv.tiempo, argv.sueldo)
    }
});


const validaUsuario = function(nombre, tiempo,sueldo){
    console.log(color.blue("-----------------------------------------------------------"))
    console.log(color.blue("|")+color.yellow("          Tabla de Jubilación de Militares      "))
    console.log(color.blue("|        Nombre             : "+ nombre));
    console.log(color.blue("|        Tiempo de servicio : "+ tiempo));
    console.log(color.blue("|        Sueldo mensual     : "+ sueldo));

  
    
    switch(tiempo){
        case "20": console.log(color.blue("|")+color.bgGreen("Jubilación         : "+`${sueldo*0.50}`))
        break;
        case "21": console.log(color.blue("|")+color.bgGreen("Jubilación         : "+`${sueldo*0.54}`))
        break;
        case "22": console.log(color.blue("|")+color.bgGreen("Jubilación         : "+`${sueldo*0.58}`))
        break;
        case "23": console.log(color.blue("|")+color.bgGreen("Jubilación         : "+`${sueldo*0.62}`))
        break;
        case "24": console.log(color.blue("|")+color.bgGreen("        Jubilación         : "+`${sueldo*0.67}`))
        break;
        case "25": console.log(color.blue("|")+color.bgGreen("       Jubilación         : "+`${sueldo*0.72}`))
        break;
        case "26": console.log(color.blue("|")+color.bgGreen("        Jubilación         : "+`${sueldo*0.77}`))
        break;
        case "27": console.log(color.blue("|")+color.bgGreen("        Jubilación         : "+`${sueldo*0.82}`))
        break;
        case "28": console.log(color.blue("|")+color.bgGreen("        Jubilación         : "+`${sueldo*0.88}`))
        break;
        case "29": console.log(color.blue("|")+color.bgGreen("        Jubilación         : "+`${sueldo*0.94}`))
        break;
        case "30": console.log(color.blue("|")+color.bgGreen("        Jubilación         : "+`${sueldo*1}`))
        break;
        default: console.log(color.blue("|")+color.bgRed(" El dato que ingreso no se encuentra en el listado legal"))
    }
    console.log(color.blue("-----------------------------------------------------------"))
}
yargs.parse()