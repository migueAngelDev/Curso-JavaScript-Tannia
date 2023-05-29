// Ejercicios con parámetros REST en JavaScript.

// EJERCICIO 1 : Suma de números
// Escribe una función llamada `sumar` que acepte una cantidad variable de argumentos numéricos y devuelva la suma de todos ellos.

/* function sumar(...numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return `El resultado de la suma es ${suma}`;
}

console.log(sumar(1, 2, 3, 4, 5)); */

// EJERCICIO 2 : Concatenar cadenas

// Escribe una función llamada `concatenar` que acepte una cantidad variable de argumentos de tipo string y devuelva una cadena que sea la concatenación de todas las cadenas recibidas.

/* function concatenar(...saludo) {
  let resultado = "";
  for (let i = 0; i < saludo.length; i++) {
    resultado += saludo[i] + " ";
  }

  console.log(resultado);
}

concatenar("Te amo", "mi bida", "y", "demasiado"); */

// EJERCICIO 3 Números pares:

// Escribe una función llamada `numerosPares` que acepte una cantidad variable de argumentos numéricos y devuelva un array con todos los números pares recibidos.

/* function numerosPares(...numeros) {
  let array = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      array.push(numeros[i]);
    }
  }

  if (array.length === 0) {
    console.log("no hay numeros pares");
  } else {
    console.log(array);
  }
}

numerosPares(1, 3, 2); */

// EJERCICIO 4: Filtrar palabras:

// Escribe una función llamada `filtrarPalabras` que acepte una cantidad variable de argumentos de tipo string y un número entero llamado `longitud` y devuelva un array con todas las palabras cuya longitud sea mayor o igual a `longitud`.

// igual: ===, mayor o igual: >=, menor o igual <=

/* function filtrarPalabras(longitud, ...palabras) {
  let resultado = palabras.filter((palabra) => palabra.length >= longitud);
  console.log(resultado);
}

filtrarPalabras(
  5,
  "vino",
  "Mariposa",
  "Oso",
  "Masha",
  "mundo",
  "paloma",
  "dedo"
);
 */

/* function filtrarPalabras(longitud, ...palabras) {
  const resultado = [];
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length >= longitud) {
      // console.log(palabras[i]);
      resultado.push(palabras[i]);
    }
  }
  console.log(resultado);
}

filtrarPalabras(
  5,
  "vino",
  "Mariposa",
  "Oso",
  "Masha",
  "mundo",
  "paloma",
  "dedo"
); */

// EJERCICIO 5: Promedio de Numeros

// Escribe una función llamada `promedio` que acepte una cantidad variable de argumentos numéricos y devuelva el promedio de todos ellos

/* function promedio(...numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  let promedio = suma / numeros.length;
  return `El promedio es ${promedio}`;
}

console.log(promedio(1, 2, 3, 4, 5)); */

// console.log("******************************************************");
