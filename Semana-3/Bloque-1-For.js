// *************************************************************************************************************************************************************************************************************************************************************************

// CICLO FOR

// EJERCICIO 1

// Cadena de textos y arreglos: Escribe una función que tome una cadena de texto como parámetro y devuelva un arreglo con las palabras en orden inverso.

// Por ejemplo, si se proporciona la cadena "Hola mundo, ¿cómo estás?", la función debe devolver el arreglo ["estás?", "cómo", "¿mundo,", "Hola"].

// No puedo usar reverse si no es un arreglo

/* // function texto(mensaje = "") {
//   console.log(mensaje.split(" ").reverse());
// }

// texto("2030 espero por ti"); */

// EJERCICIO 2

// Números y condicionales: Escribe una función que tome un número como parámetro y devuelva una cadena que contenga todos los números enteros del 1 al número proporcionado, separados por comas.

//  Si el número es divisible por 3, debe aparecer en su lugar la palabra "Fizz". Si es divisible por 5, debe aparecer la palabra "Buzz". Y si es divisible por ambos, debe aparecer la palabra "FizzBuzz". Por ejemplo, si se proporciona el número 15, la función debe devolver la cadena "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz".

/* // function cadena(n = 0) {
//   let numero = [];
//   for (let i = 1; i <= n; i++) {
//     numero.push(i);
//   }
//   // console.log(numero);
//   console.log(numero.join(" , "));
// }

// cadena(10); */

/* // function Multiplos(n = 0) {
//   let nuevo = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//     console.log(i);
//   }
// }

// Multiplos(15); */

// EJERCICIO 3

// Booleanos y objetos: Escribe una función que tome un objeto como parámetro y devuelva verdadero si todos los valores en el objeto son booleanos verdaderos, y falso de lo contrario.

// Por ejemplo, si se proporciona el objeto {a: true, b: false, c: true}, la función debe devolver falso.

/* // function verdaderoFalso(text = {}) {
//   let arr = [];
//   for (const key in text) {
//     arr.push(text[key]);
//   }
//   console.log(arr);

//   let someArr = arr.some((x) => x === false);
//   if (someArr) console.log(false);
//   if (!someArr) console.log(true);
// }

// verdaderoFalso({ a: true, b: true, c: true, d: true, e: true, f: true });
// verdaderoFalso({ a: true, b: true, c: true }); */

// EJERCICIO 4

// Undefined, null, NaN y funciones: Escribe una función que tome un arreglo de valores como parámetro y devuelva la suma de los valores numéricos en el arreglo. La función debe ignorar los valores que sean undefined, null o NaN.

// Por ejemplo, si se proporciona el arreglo [1, null, "hola", undefined, NaN, 3], la función debe devolver 4.

/* // function numeros(n = []) {
//   let suma = 0;
//   for (let i = 0; i <= n.length; i++) {
//     if (!isNaN(n[i])) {
//       suma += n[i];
//     }
//   }
//   console.log(suma);
// }

// numeros([1, 3, null, "hola", undefined, NaN, 3]); */

// EJERCICIO 5

// Funciones y tipos de operadores: Escribe una función que tome un arreglo de números como parámetro y devuelva un objeto con dos propiedades: "suma" y "promedio". La propiedad "suma" debe contener la suma de todos los números en el arreglo, y la propiedad "promedio" debe contener el promedio de los números en el arreglo.

// Por ejemplo, si se proporciona el arreglo [1, 2, 3, 4, 5, 6], la función debe devolver el objeto {suma: 21, promedio: 3.5}.

/* // function numeros(n = []) {
//   let suma = 0;
//   for (let i = 0; i < n.length; i++) {
//     suma += n[i];
//   }

//   let promedio = suma / n.length;

//   let objeto = {
//     sumita: suma,
//     promedio: promedio,
//   };

//   console.log(objeto);
// }

// numeros([10, 10, 10, 10, 10]);
// numeros([1, 2, 3, 4, 5, 6]); */

// push es de arreglos asi que no puedo usarlo

// *************************************************************************************************************************************************************************************************************************************************************************

// CICLO FOR OF

// EJERCICIO 1

// Arreglos y números: Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de los cuadrados de esos números.

// Por ejemplo, si se proporciona el arreglo [1, 2, 3], la función debe devolver 14 (1^2 + 2^2 + 3^2 = 14).

/* function sumaDeCuadrados(n = []) {
  let suma = 0;

  for (let num of n) {
    // let u = num * num;
    suma += num * num;
    // console.log(u);
  }
  console.log(suma);
}

sumaDeCuadrados([1, 2, 3]); */

// para calcular el cuadrado de cada número el cuadrado de un número se obtiene multiplicando ese número por sí mismo, entonces num * num

// la variable u y al llamarla solo es para comprobar que si esten al cuadrado

// EJERCICIO 2

// Objetos y cadenas de texto: Escribe una función que tome un objeto como parámetro y devuelva una cadena de texto que contenga todas las claves y valores del objeto separados por un guión medio.

// Por ejemplo, si se proporciona el objeto {a: 1, b: 2, c: 3}, la función debe devolver la cadena "a-1_b-2_c-3".

/* function object(text = {}) {
  let arr = [];

  for (let key of Object.entries(text)) {
    arr.push(key.join("-"));
  }
  console.log(arr.join("_"));
}

object({ a: 1, b: 2, c: 3, d: true, e: false }); */

/* function object(text = {}) {
  let arr = "";

  for (let [key, value] of Object.entries(text)) {
    // let df = key + "-" + value + "_";
    // arr += df;

    arr += key + "-" + value + "_";
  }

  arr = arr.slice(0, arr.length - 1);
  // arr = arr.substring(0, arr.length - 1);
  console.log(arr);
}

object({ a: 1, b: 2, c: 3, d: true, e: false }); */

// cualquiera de los dos métodos se puede usar para elimar una parte del string
// investigue y me aparecieron esos dos métodos en google

// EJERCICIO 3

// Arreglos y condicionales: Escribe una función que tome un arreglo de números como parámetro y devuelva el número más grande del arreglo. Además, utiliza una estructura condicional para comparar los números y encontrar el más grande.

// Por ejemplo, si se proporciona el arreglo [1, 5, 2, 9, 3], la función debe devolver 9.

/* function numeroGrande(n = []) {
  let numero = 0;

  for (let num of n) {
    if (num > numero) {
      numero = num;
    }
  }
  console.log(numero);
}

numeroGrande([1, 5, 20, 9, 3]); */

// EJERCICIO 4

// Arreglos y objetos: Escribe una función que tome un arreglo de objetos como parámetro y devuelva un arreglo con el valor de la propiedad "nombre" de cada objeto.

// Por ejemplo, si se proporciona el arreglo [{nombre: "Juan"}, {nombre: "María"}, {nombre: "Pedro"}], la función debe devolver el arreglo ["Juan", "María", "Pedro"].

// con método

/* function nombre(a = [{}]) {
  let nombres = a.map((objeto) => objeto.nombre);

  console.log(nombres);
} */

// sin método

/* function nombre(a = [{}]) {
  let nombres = [];

  for (const obj of a) {
    if (obj.nombre) {
      nombres.push(obj.nombre);
    }
  }

  console.log(nombres);
} */

// nombre([
//   { nombre: "Juan", trabajo: "pintor" },
//   { nombre: "María" },
//   { nombre: "Pedro" },
//   { prueba: "pintor" },
// ]);

// EJERCICIO 5

// Arreglos y funciones: Escribe una función que tome un arreglo de números como parámetro y devuelva un arreglo con los números ordenados de menor a mayor.

// Por ejemplo, si se proporciona el arreglo [3, 1, 4, 2, 5], la función debe devolver el arreglo [1, 2, 3, 4, 5].

// con método

/* function numeroOrden(n = []) {
  let numeros = n.sort((a, b) => a - b);
  // let numeros = n.sort();
  console.log(numeros);
}

numeroOrden([3, 1, 4, 2, 5]); */

// *************************************************************************************************************************************************************************************************************************************************************************

// CICLO FOR IN

// EJERCICIO 1

// Objetos y cadenas de texto: Escribe una función que tome un objeto como parámetro y devuelva una cadena de texto que contenga todas las claves y valores del objeto separados por un guión medio.

// Por ejemplo, si se proporciona el objeto {a: 1, b: 2, c: 3}, la función debe devolver la cadena "a-1_b-2_c-3".

/* function object(text = {}) {
  let arr = [];

  for (let key in text) {
    arr.push(key + "-" + text[key]);
  }
  console.log(arr.join("_"));
}
 */
/* function object(text = {}) {
  let nuevo = "";

  for (const key in text) {
    nuevo += key + "-" + text[key] + "_";
  }

  nuevo = nuevo.slice(0, nuevo.length - 1);

  console.log(nuevo);
} */

// object({ a: 1, b: 2, c: 3, d: true, e: false });

// EJERCICIO 2

// Objetos y condicionales: Escribe una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto que sean de tipo `number`.

// Por ejemplo, si se proporciona el objeto {a: 1, b: "dos", c: 3}, la función debe devolver 2.

/* function contador(obj = {}) {
  let conta = 0;
  for (const key in obj) {
    // console.log(obj[key]);
    if (!isNaN(obj[key])) {
      conta++;
      // conta += 1;
    }
  }
  console.log(conta);
}

contador({ a: 1, b: "dos", c: 3 }); */

//  la variable conta me va a incrementar cada vez que encuentre una propiedad de tipo number como dice el ejercicio y se que puedo usar ++ y +=1

// isNaN se utiliza para saber si un valor no es un numero, entonces voy a evaluar si alguna de las propiedades no es un numero, pero me devuelve los valores que no son numeros, por lo que uso el operador de negacion para invertir el valor ya que ahora los numeros seran validos

// EJERCICIO 3

// Objetos y arreglos: Escribe una función que tome un objeto como parámetro y devuelva un arreglo con las claves del objeto ordenadas alfabéticamente.

//  Por ejemplo, si se proporciona el objeto {b: 2, a: 1, c: 3}, la función debe devolver el arreglo ["a", "b", "c"].

/* function objeto(obj = {}) {
  let clave = Object.keys(obj);
  clave.sort();

  console.log(clave);
} */

/* function objeto(obj = {}) {
  let claves = [];
  for (const key in obj) {
    claves.push(key);
  }

  console.log(claves.sort());
}

objeto({ b: 2, a: 1, c: 3 }); */

// no sé que otra forma sin usar el método sort

// EJERCICIO 4

// Objetos y objetos: Escribe una función que tome un objeto como parámetro y devuelva otro objeto con las mismas propiedades, pero cuyos valores sean las claves y viceversa.

// Por ejemplo, si se proporciona el objeto {a: 1, b: 2, c: 3}, la función debe devolver el objeto {1: "a", 2: "b", 3: "c"}.

// function intercambio(obj = {}) {
//   let nuevo = {};
//   for (const key in obj) {
//     nuevo[obj[key]] = key;
//   }
//   console.log(nuevo);
// }

// intercambio({ a: 1, b: 2, c: 3 });

// [obj[key]] esto me va a devolver los valores del objeto y se lo estoy dando al nuevo objeto y asu vez estos valores se van a convetir en las nuevas claves con lo que es = key

// EJERCICIO 5

// Objetos y funciones: Escribe una función que tome un objeto como parámetro y devuelva un arreglo con los valores de las propiedades del objeto que sean de tipo `function`.

// Por ejemplo, si se proporciona el objeto { a: 1, b: function() { }, c: function() { } }
// La función debe devolver el arreglo[function () { }, function () { }].

/* function funciones(obj = {}) {
  // console.log(obj);
  let funciones = [];

  for (const key in obj) {
    if (typeof obj[key] === "function") {
      funciones.push(obj[key]);
    }
  }

  console.log(funciones);
}
funciones({ a: 1, b: function () {}, c: function () {} }); */

// typeof en JavaScript se utiliza para determinar el tipo de datos de un valor específico. Sirve para obtener información sobre si un valor es un número, una cadena de texto, un booleano, un objeto, una función u otro tipo de dato.

// *************************************************************************************************************************************************************************************************************************************************************************

// CICLO WHILE

// EJERCICIO 1

// Números y cadenas de texto: Escribe una función que tome un número como parámetro y devuelva una cadena de texto que contenga todos los números desde 1 hasta el número proporcionado, separados por comas.

// Por ejemplo, si se proporciona el número 5, la función debe devolver la cadena "1,2,3,4,5".

// function numero(n = 0) {
//   let resultado = "";
//   let contador = 1;

//   while (contador <= n) {
//     resultado += contador;

//     contador++;

//     resultado += ",";
//   }
//   resultado = resultado.slice(0, resultado.length - 1);
//   console.log(resultado);
// }

// numero(5);

// terminar de ver como quitar la ultima coma : listo

// EJERCICIO 2

// Números y condicionales: Escribe una función que tome un número como parámetro y devuelva true si el número es primo y false en caso contrario.

// Utiliza el ciclo while para comprobar si el número es divisible por algún número entre 2 y su mitad (sin incluir).

//  Por ejemplo, si se proporciona el número 7, la función debe devolver true.

// Este es el que habias hecho en el salón, pero con el ciclo for?

// function esPrimo(numero = 0) {
//   if (numero < 2) {
//     console.log(false);
//   }

//   let division = 2;
//   while (division < numero) {
//     if (numero % division === 0) {
//       console.log(false);
//       return;
//     }
//     division++;
//   }

//   console.log(true);
// }

// esPrimo(4);

// return si se divide entonces ya no es valido, es que cuando pongo 4 me visualiza los dos

/* EJERCICIO 3

Arreglos y objetos: Escribe una función que tome un arreglo de objetos como parámetro y devuelva un objeto que contenga la suma de todas las propiedades numéricas de todos los objetos del arreglo.

Por ejemplo, si se proporciona el arreglo [{a: 1, b: 2}, {a: 2, c: 3, d: "cuatro"}], la función debe devolver el objeto {a: 3, b: 2, c: 3}. */

/* EJERCICIO 4

Funciones y condicionales: Escribe una función que tome una función y un número como parámetros y llame a la función el número de veces indicado.

Por ejemplo, si se proporciona la función console.log y el número 3, la función debe llamar a console.log 3 veces. */

// function inv(funcion, n = 0) {
//   let i = 0;
//   while (i < n) {
//     console.log(funcion);
//     i++;
//   }
// }

// function u() {
//   return "aer";
// }

// inv(u(), 3);
/* function llamarFuncion(numero) {}


// EJERCICIO 5

// Booleans y cadenas de texto: Escribe una función que tome un arreglo de booleanos como parámetro y devuelva una cadena de texto que contenga el número de elementos true y false del arreglo, separados por un guión medio.

// Por ejemplo, si se proporciona el arreglo [true, false, true, false, true], la función debe devolver la cadena "3-2".

/* function contarElementos(arreglo) {
  let True = 0;
  let False = 0;
  let i = 0;

  while (i < arreglo.length) {
    if (arreglo[i] === true) {
      True++;
    } else if (arreglo[i] === false) {
      False++;
    }
    i++;
  }

  console.log(True + "-" + False);
}

contarElementos([true, false, true, false, true]); */

// necesite ayuda en[i], lo habia dejado pelones

// *************************************************************************************************************************************************************************************************************************************************************************

// CICLO DO WHILE

// EJERCICIO 1

// Números y condicionales: Escribe una función que tome un número como parámetro y devuelva true si el número es un número de Armstrong y false en caso contrario.

// Un número de Armstrong es un número que es igual a la suma de las potencias de sus dígitos.

// Por ejemplo, Si se proporciona el número 153, la función debe devolver true.

// Por ejemplo, tomemos el número 153. Tiene tres dígitos (1, 5 y 3). Si elevamos cada uno de estos dígitos al cubo (3^3 = 27, 5^3 = 125 y 1^3 = 1) y sumamos los resultados (27 + 125 + 1 = 153), obtenemos el número original, que es 153. Por lo tanto, 153 es un número Armstrong.

// Un número narcisista es aquel que es igual a la suma de cada uno de sus dígitos elevados a la "n" potencia (donde "n" es el número de cifras del número). Los primeros números narcisistas son: 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474 y 54748.

/* function numeroNarcisita(n = 0) {
  let separar = Array.from(String(n), Number);
  let suma = 0;

  // console.log("*************");
  // console.log(separar);
  // console.log("*************");
  // console.log(longitud);
  // console.log("*************");0

  for (let i = 0; i < separar.length; i++) {
    // console.log(i);

    let potencia = separar[i];

    //  console.log("*************");
    // console.log(potencia);

    for (let j = 1; j < separar.length; j++) {
      //  potencia *= separar[i];
      // j no porque esta iterando la elevacion
      potencia = potencia * separar[i];
      // console.log(potencia);
    }

    // suma += potencia;
    suma = suma + potencia;
    // console.log(suma);
  }

  if (suma === n) {
    console.log(true);
  } else {
    console.log(false);
  }
}

numeroNarcisita(153); */

// EJERCICIO 2

// Arreglos y objetos: Escribe una función que tome un arreglo de objetos como parámetro y devuelva un objeto que contenga la suma de todas las propiedades numéricas de todos los objetos del arreglo.

//  Por ejemplo, si se proporciona el arreglo [{a: 1, b: 2}, {c: 3, d: "cuatro"}], la función debe devolver el objeto {a: 1, b: 2, c: 3}.

// function arreglo(obj = [{}]) {
//   let funciones = {};

//   for (const key in obj) {
//   }
// }
// arreglo([
//   { a: 1, b: 2 },
//   { c: 3, d: "cuatro" },
// ]);

// EJERCICIO 3

// Funciones y condicionales: Escribe una función que tome una función y un número como parámetros y llame a la función el número de veces indicado.

// Por ejemplo, si se proporciona la función console.log y el número 3, la función debe llamar a console.log 3 veces.

// EJERCICIO 4

// Booleans y cadenas de texto: Escribe una función que tome un arreglo de booleanos como parámetro y devuelva una cadena de texto que contenga el número de elementos true y false del arreglo, separados por un guión medio.

// Por ejemplo, si se proporciona el arreglo [true, false, true, false, true], la función debe devolver la cadena "3-2".

/* function contar(n = []) {
  let True = 0;
  let False = 0;
  let i = 0;

  do {
    if (n[i] === true) {
      True++;
    } else if (n[i] === false) {
      False++;
    }
    i++;
  } while (i < n.length);

  console.log(True + "-" + False);
}

contar([true, false, true, false, true]); */

// EJERCICIO 5

// Números y cadenas de texto: Escribe una función que tome un número como parámetro y devuelva una cadena de texto que contenga todos los números desde el número proporcionado hasta 1, separados por comas.

// Por ejemplo, si se proporciona el número 5, la función debe devolver la cadena "5,4,3,2,1".

/* function n(number = 0) {
  let resultado = "";
  let contador = number;

  do {
    resultado += contador;

    contador--;
    resultado += ",";
  } while (contador);

  console.log(resultado);
}

n(5); */

// terminar de ver como quitar la ultima coma

// *************************************************************************************************************************************************************************************************************************************************************************

// CICLO TRY CATCH

// EJERCICIO 1

// Números y manejo de errores: Escribe una función que tome dos números como parámetros y devuelva el resultado de la división del primer número por el segundo.

// Por ejemplo, si se proporciona los números 10 y 0, la función debe devolver el mensaje de error "No se puede dividir por cero".

/* function division(n1 = 0, n2 = 0) {
  try {
    if (n2 === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return n1 / n2;
  } catch (error) {
    return error.message;
  }
}

console.log(division(10, 0)); */

// EJERCICIO 2

// Arreglos y manejo de errores: Escribe una función que tome un arreglo como parámetro y devuelva el primer elemento del arreglo.

// Por ejemplo, si se proporciona el arreglo [], la función debe devolver el mensaje de error "El arreglo está vacío".

// let empanadas = {
//   ingredientes: ["masa", "jamon", "queso", "aceite"],
//   costo: [15, 50, 70, 55],
//   function() {},
// };

// console.table(empanadas);

// let tr = ["tannia", "miguel", "luis", "arianna", "gema"];

// console.table();
