//Empecé aquí
const yargs = require('yargs');


yargs.command({
    command: 'validar',
    describe: 'Validación de los jubilados',

    builder: {
        nombre: {
            describe: 'nombre del usuario',
            demandOption: true,
            default: "Ingresa el nombre",
            type: 'string'
        },
        codigo: {
            describe: 'codigo del usuario',
            demandOption: true,
            dafault: "Ingresa el codigo",
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(argv)
        validaUsuario(argv.nombre, argv.codigo)
    }
});


const validaUsuario = function(nombre, codigo){
    console.log("nombre : "+ nombre);
    console.log("codigo : "+ codigo);
    
    if (nombre === "10" && codigo === "20"){

        return console.log(("suma"+`${nombre*codigo}`));
    }else{
        return console.log(("acceso denegado"));
    }
    //return console.log(nombre + codigo);
}
yargs.parse()