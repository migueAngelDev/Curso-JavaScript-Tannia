// 1. Suma de dos números:

// Escribe una arrow function llamada `sumar` que acepte dos números como parámetros y devuelva la suma de ambos.

/* let sumar = (numero1, numero2) => numero1 + numero2;

console.log(sumar(3, 8));
 */
// ******************************************

// 2. Elevar al cuadrado:

// Escribe una arrow function llamada `elevarAlCuadrado` que acepte un número como parámetro y devuelva el resultado de elevarlo al cuadrado.

/* let elevarAlCuadrado = (numero) => numero ** 2;

console.log(elevarAlCuadrado(3));
 */
// ******************************************

// 3. Filtrar números pares:

// Escribe una arrow function llamada `filtrarPares` que acepte un array de números como parámetro y devuelva un nuevo array que contenga solo los números pares.

/* const filtrarPares = (numeros) => numeros.filter((numero) => numero % 2 === 0);

console.log(filtrarPares([10, 15, 20, 25, 30])); */

/* let filtrarPares = (numeros) => {
  const numerosPares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      // console.log(numeros[i]);
      numerosPares.push(numeros[i]);
    }
  }

  return numerosPares;
};

console.log(filtrarPares([10, 15, 20, 25, 30])); */

// ******************************************

// 4. Ordenar cadenas por longitud:

// Escribe una arrow function llamada `ordenarPorLongitud` que acepte un array de strings como parámetro y devuelva un nuevo array con las cadenas ordenadas de menor a mayor longitud.

/* let ordenarPorLongitud = (cadenas) =>
  cadenas.sort((a, b) => a.length - b.length);

console.log(ordenarPorLongitud(["Hola", "mi", "bida", "vamos", "por", "más"])); */

// ******************************************

// 5. Calcular promedio:

// Escribe una arrow function llamada `calcularPromedio` que acepte un array de números como parámetro y devuelva el promedio de todos ellos.

/* let calcularPromedio = (numeros) => {
  if (numeros.length === 0) {
    return "No hay numeros";
  }

  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma / numeros.length;
};

console.log(calcularPromedio([])); */

// console.log("******************************************************");
