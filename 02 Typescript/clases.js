console.log("Hola mundo");
//let hola: string = 'Hola'; //mala practica declarar a un tipo redundantemente
//let hola = 'Hola';
//let hola: any;
var hola; //saber si es tipo number o string
var adios = 'Gabriela'; // no se puede reasignar las variables ctes.
hola = 'Adios';
//adios = 'ahsgsg';
hola = 1;
hola = '123';
hola = 'Adios'; //Duck typing a los string no se les asigna numeros
//TIPOS DE VARIABLES
var nombre = 'Gabriela';
var edad = 26;
var casado = false;
var fechaNacimineto = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var estefania = {
    nombre: 'estefania',
    casado: 
};
var gabriela = new Usuario('Gabriela', false, 26);
console.log(gabriela);
