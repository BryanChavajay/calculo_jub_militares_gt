//Empecé aquí
const yargs = require('yargs');
const interface = require('readline-sync')


yargs.command({
    command: 'validar',
    describe: 'Validación de los jubilados',

    builder: {
        nombre: {
            describe: 'nombre del usuario',
            demandOption: true,
            default: "Ingresa el nombre",
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(argv)
        validaUsuario(argv.nombre)
    }
});

let sueldo = interface.question("Escribe tu sueldo: ");
const validaUsuario = function(nombre){
    console.log("Años de servicio : "+ nombre);
   
    if (nombre ==="10"|| nombre ==="20" || nombre === "30"){

        console.log(("Sus datos son correctos!! "));
        return console.log(("La jubilación mensual asciende a: "+`${nombre*sueldo}`));
        
    }else {
        return console.log(("acceso denegado"));
    }
    //return console.log(nombre + codigo);
}
yargs.parse()

switch(nombre){
    case "10": console.log("Resultado: "+nombre*5)
    break;
}