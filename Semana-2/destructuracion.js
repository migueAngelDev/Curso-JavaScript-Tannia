// Ejercicio para el vídeo 18 destructuración:

// 1. Ejercicio de destructuración de objetos:
// Ejercicio: Escribe un programa que tenga un objeto con las siguientes propiedades: nombre, edad y ciudad. Luego, utiliza la destructuración para asignar cada propiedad a una variable y luego imprime cada variable en la consola.

/* let objeto = {
  nombre: "Tannia",
  edad: 19,
  cuidad: "Coatzacoalcos",
};

let { nombre, edad, cuidad } = objeto;
console.log(nombre);
console.log(edad);
console.log(cuidad); */

// 2. Ejercicio de destructuración de arreglos:
// Ejercicio: Escribe un programa que tenga un arreglo con los siguientes valores: "Juan", "Pedro", "María", "Sara". Luego, utiliza la destructuración para asignar el primer valor del arreglo a una variable llamada "primerNombre" y el segundo valor a una variable llamada "segundoNombre". Luego, imprime ambas variables en la consola.

/* let arreglo = ["Juan", "Pedro", "María", "Sara"];

let [primerNombre, segundoNombre] = arreglo;

console.log(primerNombre, segundoNombre); */

// 3. Ejercicio de destructuración de funciones:
// Ejercicio: Escribe una función que tome un objeto con las siguientes propiedades: "nombre", "edad" y "ciudad" como argumento. Luego, utiliza la destructuración para asignar cada propiedad a una variable dentro de la función y luego imprime cada variable en la consola.

/* function funcion(persona = {}) {
  console.log(persona);

  let { nombre, edad, ciudad } = persona;
  console.log(nombre);
  console.log(edad);
  console.log(ciudad);
}

funcion({
  nombre: "Tannia",
  edad: 25,
  ciudad: "Coatzacoalcos",
});
 */
