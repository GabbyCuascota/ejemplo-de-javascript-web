console.log("Hola mundo");
//let hola: string = 'Hola'; //mala practica declarar a un tipo redundantemente
//let hola = 'Hola';
//let hola: any;
let hola: number | string; //saber si es tipo number o string
const adios = 'Gabriela'; // no se puede reasignar las variables ctes.
hola = 'Adios';
//adios = 'ahsgsg';
hola = 1;
hola = '123';
hola = 'Adios';   //Duck typing a los string no se les asigna numeros


//TIPOS DE VARIABLES
let nombre: string = 'Gabriela';
let edad: number = 26;
let casado: boolean = false;
let fechaNacimineto: Date = new Date();

class Usuario {
    nombre: string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string,
                casado: boolean,
                edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}
let estefania = {
    nombre: 'estefania',
    casado: false,
    edad: 26
};
let gabriela: Usuario = new Usuario('Gabriela', false, 26);
console.log(gabriela);
console.log(estefania);

//VENTAJA DE SINTAXIS
class UsuarioDos{
    constructor(public nombre: string,
                private _casado: boolean,
                protected _edad: number){
    }
    get casado() {
        return this._casado;
    }
    set casado(casado: boolean){
        this._casado = casado;
    }
    imprimirUsuario (saludo: string): string{
        //template strings
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this._casado}
        , mi edad es ${this._edad}`;
    }
}
let gabrielaDos = new Usuario('Gabriela', false, 26);
console.log(gabrielaDos.casado);
console.log(gabrielaDos.imprimirUsuario('Hola soy Gabby'));
let abby:UsuarioTres ={
    nombre:'abby',
    casado: false,
    edad: 23
};
interface UsuarioTres{
    nombre: string;
    casado?: boolean;
    edad: number;
}
