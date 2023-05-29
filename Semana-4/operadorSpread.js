// Ejercicios con el operador spread en JavaScript.

// Ejercicio 1: Concatenar arrays
// Escribe una función llamada `concatenarArrays` que acepte dos arrays como argumentos y devuelva un nuevo array que contenga todos los elementos de ambos arrays.

/* function concatenarArrays(array1 = [], array2 = []) {
  let array3 = [...array1, ...array2];
  return array3;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

console.log(concatenarArrays(array1, array2)); */

//Ejercicio 2

// Escribe una función llamada `clonarObjeto` que acepte un objeto como argumento y devuelva una copia exacta del mismo objeto.

/* function clonarObjeto(objeto = {}) {
  return { ...objeto };
}

let objeto1 = { a: 1, b: 2, c: 3 };

let objeto2 = clonarObjeto(objeto1);

console.log(objeto2);
 */
// Ejercicio 3

// Escribe una función llamada `combinarObjetos` que acepte varios objetos como argumentos y devuelva un nuevo objeto que contenga todas las propiedades de los objetos recibidos.

/* function combinarObjetos(...objetos) {
  let resultado;

  for (let objeto of objetos) {
    resultado = { ...resultado, ...objeto };
    // console.table(resultado);
  }

  return resultado;
}

let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let object3 = { e: 5, f: 6 };

const objetoNuevo = combinarObjetos(object1, object2, object3);

console.log(objetoNuevo); */

// Ejercicio 4 Calcular máximo:

// Escribe una función llamada `calcularMaximo` que acepte una cantidad variable de argumentos numéricos y devuelva el número máximo de todos ellos.

/* function calcularMaximo(...numeros) {
  let maximo = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }

  return maximo;
}

const maximo = calcularMaximo(1, 3, 4, 90);

console.log(maximo); */

// Ejercicio 5

// Escribe una función llamada `unirCadenas` que acepte una cantidad variable de argumentos de tipo string y devuelva una cadena que sea la concatenación de todas las cadenas recibidas.

/* function unirCadenas(...cadenas) {
  let resultado = "";

  for (let i = 0; i < cadenas.length; i++) {
    resultado += cadenas[i] + " ";
  }

  return resultado;
}

let cadena1 = "Hola,";
let cadena2 = "¿cómo";
let cadena3 = "estás?";

const cadenaUnida = unirCadenas(cadena1, cadena2, cadena3);

console.log(cadenaUnida); */

// console.log("******************************************************");
