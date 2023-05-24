// console.log("Estos son los ejercicios de Break Continue");
// BREAK CONTINUE

// EJERCICIO 1

// Ejercicios utilizando las palabras reservadas break y continue en JavaScript:

// Escribe un ciclo for que recorra un arreglo de números y detenga el ciclo en el primer número negativo que encuentre.

// Por ejemplo, si se proporciona el arreglo [1, 2, -3, 4, 5], el ciclo debe detenerse después de encontrar el número -3.

/* let numeros = [1, 2, -3, 4, -7, 5];

for (let i = 0; i < numeros.length; i++) {
  // console.log(numeros[i]);
  if (numeros[i] < 0) {
    console.log("El primer número negativo es " + numeros[i]);
    break;
  }
} */

// EJERCICIO 2

// Escribe un ciclo for que recorra un arreglo de números y omita cualquier número negativo.

// Por ejemplo, si se proporciona el arreglo [1, -2, 3, -4, 5], el ciclo debe imprimir los números 1, 3 y 5.

/* let n = [1, -2, 3, -4, 5];

for (let i = 0; i < n.length; i++) {
  if (n[i] < 0) {
    continue;
  }
  console.log(n[i]);
} */

// EJERCICIO 3

// Escribe un ciclo for que pida al usuario que ingrese una serie de números positivos y los almacene en un arreglo. El ciclo debe detenerse cuando el usuario ingrese un número negativo.

// Por ejemplo, si el usuario ingresa los números 1, 2, 3 y -1, el arreglo resultante debe ser [1, 2, 3].

/* let array = [];

let i = 0;
i++;
while (i > 0) {
  let n = prompt("Ingresa un numero");
  if (n > 0) array.push(n);
  if (n < 0) break;
}
console.log(array); */
// EJERCICIO 4

// Escribe un while for que pida al usuario que ingrese una serie de números y los imprima en la consola, pero omita cualquier número negativo.

// Por ejemplo, si el usuario ingresa los números 1, -2, 3, -4 y 5, el ciclo debe imprimir los números 1, 3 y 5.

/* let i = 0;
i++;

while (true) {
  let numero = parseInt(prompt("Ingrese un numero"));
  if (numero < 0) {
    // console.log(numero);
    break;
  } else if (numero > 0) {
    console.log(numero);
  }
} */

/* let ingresoNumeros = parseInt(
  prompt("Ingresa una serie de números separados por espacios:")
);

console.log(ingresoNumeros);

let numeros = ingresoNumeros.split(" ");

console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
  const number = parseInt(numeros[i]);

  if (number >= 0) {
    console.log(number);
  }
} */

// EJERCICIO 5

// Escribe un ciclo for-in que recorra las propiedades de un objeto y detenga el ciclo cuando encuentre la propiedad "edad".

// Por ejemplo, si se proporciona el objeto {nombre: "Juan", edad: 30, ciudad: "Bogotá"}, el ciclo debe detenerse después de encontrar la propiedad "edad".

/* let persona = {
  nombre: "Tannia",
  edad: 19,
  ciudad: "Coatzacoalcos",
};

for (let propiedad in persona) {
  if (propiedad === "edad") {
    console.log(propiedad + " = " + persona[propiedad]);
    break;
  }
}
 */
// EJERCICIO 6

// Escribe un ciclo for-in que recorra las propiedades de un objeto y omita cualquier propiedad que tenga un valor numérico.

// Por ejemplo, si se proporciona el objeto {nombre: "Juan", edad: 30, ciudad: "Bogotá"}, el ciclo debe omitir la propiedad "edad".

/* let objeto = {
  nombre: "Tannia",
  edad: 19,
  ciudad: "Coatzacoalcos",
};

for (let propiedad in objeto) {
  if (typeof objeto[propiedad] === "number") {
    continue;
  }

  console.log(propiedad + ": " + objeto[propiedad]);
} */
