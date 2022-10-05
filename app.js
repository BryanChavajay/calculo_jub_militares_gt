const interface = require('readline-sync')

let tiempo = interface.question("Años de trabajo");
let sueldo = interface.question("Escribe tu sueldo");
console.log("Jubilación "+ `${tiempo*sueldo}`);
