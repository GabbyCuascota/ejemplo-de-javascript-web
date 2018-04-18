console.log('Hola mundo');
var mutar;
var nombre = 'Gabriela';
mutar = nombre;
var edad = 26;
mutar = edad;
var peso = 157.5;
mutar = peso;
var casado= false;
mutar = casado;
var fechaNacimiento = new Date();
var noExisto = null;
var noEstoyDefinido = undefined;
var a = -1;
var b = 0;
var c = 1;
//cmd + a = seleccionar cod
//cmd + alt +l = inventar cod
if (a) {
    console.log('Verdadero');
}else {
    console.log('Falso');
}

//objetos json
var usuario = {
  "nombre": "Gabriela",
    apellido: "Cuascota",
    cedula: '1728394675',
    edad: 28,
};
console.log(usuario.nombre);
console.log(usuario);
delete usuario.edad; // borrar variables
console.log(usuario);
usuario.fechaNacimiento = new Date(); // crear cosas a 1 nivel
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'gabby';//crear cosas a diferente nivel
console.log(usuario);
var arreglo = [1, "Gabriela", true, undefined, null, new Date(),{nombre: "Gabriela"}, [1, 2, 3, true]];