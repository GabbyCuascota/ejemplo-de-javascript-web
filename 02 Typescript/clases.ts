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
    let estefania = {
        nombre: 'estefania';
        casado:
    }
}
let gabriela: Usuario = new Usuario('Gabriela', false, 26);
console.log(gabriela);
