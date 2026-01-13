//Funciones tipadas
//Crear la funcion sumar que sume 2 números y retorne el resultado
export function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(2,4))

//Funcion saludar 

export function saludar(nombre: string="Usuario"): void {
    console.log(`Hola, ${nombre}`);
}

saludar("Guillermo");

//funcion con parametros opcionales

interface Usuario {
    nombre: string,
    email: string,
    edad?: number,
}

function crearUsuario(nombre: string, email: string, edad?: number): Usuario {
    return { 
        nombre,
        email,
        edad
    };
}

crearUsuario("Ana", "ana@example.com");

//types en typescript sirve para asociar diferentes tipos a una variable

let id: string | number;
//id = "10";

type Tamano = "small" | "medium" | "large";

let talla: Tamano = "large";

//Ejercicio 1:
/*
 * Producto(id, nombre, precio, disponible y categoria) siendo opcional la categoria.
 * Declarar una funcion llamada calcularTotal que reciba un array de prodyctos y retorne la suma de los productos que tengan categoria
 */

interface Producto {
    id: number,
    nombre: string,
    precio: number,
    disponible: boolean,
    categoria?: string,
}

function calcularTotal(productos: Producto[]): number {
    return  productos.reduce((total,producto) => {
        return total + (producto.disponible ? producto.precio : 0);
    }, 0)
}

const misProductos: Productos[] = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
        disponible: true,
        categoria: "Electrónica"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        disponible: false,
        categoria: "Ropa"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 150,
        disponible: true,
        categoria: "Hogar"
    },
]

const total = calcularTotal(misProductos);
console.log(total);

//crear componente llamado header que muestre un header con el nombre diego
//Crear un componente llamado saludo que renderice 