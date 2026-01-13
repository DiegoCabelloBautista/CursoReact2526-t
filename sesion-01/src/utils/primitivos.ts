let nombre: string = "pepe";
let edad: number = 30;
let casado: boolean = false;
let nulo: null = null;
let indefinido: undefined = undefined;

let lenguajes: string[] = ["JavaScript", "TypeScript", "React"];

const numeros: number[] = [1, 2, 3, 4, 5];

const usuarios : { nombre: string; edad: number }[] = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 35 }
];

usuarios [0].salario=23000;

//Solo un tipo de objeto

let persona: {nombre: string; edad: number; activo: boolean} = {
    nombre: "Ana",
    edad: 28,
    activo: true,
}


//Una interfaz es un CONTRATO que define la forma que va a tener un objeto. Las interfaces seson un contrato que define la forma de un objeto

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    edad?: number,
    activo: boolean
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Luis",
    email: "luis@example.com",
    activo: true
}

const usuario2: Usuario = {
    id: 2,
    nombre: "Sofía",
    email: "sofia@example.com",
    edad: 25,
    activo: true
}