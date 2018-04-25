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
    casado: false,
    edad: 26
};
var gabriela = new Usuario('Gabriela', false, 26);
console.log(gabriela);
console.log(estefania);
//VENTAJA DE SINTAXIS
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this.casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //template strings
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado " + this._casado + "\n        , mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var gabrielaDos = new Usuario('Gabriela', false, 26);
console.log(gabrielaDos.casado);
console.log(gabrielaDos.imprimirUsuario('Hola soy Gabby'));
var abby = {
    nombre: 'abby',
    casado: false,
    edad: 23
};
