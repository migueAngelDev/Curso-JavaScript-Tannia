// 1. Cadena de textos y arreglos: Escribe una función que tome una cadena de texto como parámetro y devuelva un arreglo con las palabras en orden inverso.

// Por ejemplo, si se proporciona la cadena "Hola mundo, ¿cómo estás?", la función debe devolver el arreglo ["estás?", "cómo", "¿mundo,", "Hola"].

// No puedo usar reverse si no es un arreglo

/* function texto(mensaje = "") {
  console.log(mensaje.split(" ").reverse());
}

texto("2030 espero por ti"); */

function invertirCadena(cadena) {
  var nuevaCadena = "";
  for (var i = cadena.length - 1; i >= 0; i--) {
    nuevaCadena += cadena[i];
  }
  return console.log(nuevaCadena);
}
invertirCadena("hola mi bida");

// ⏫
//esto Noooooooooooo

/* console.log('La cadena original es: "' + cadenaADividir + '"'); */
// 2. Números y condicionales: Escribe una función que tome un número como parámetro y devuelva una cadena que contenga todos los números enteros del 1 al número proporcionado, separados por comas.

//  Si el número es divisible por 3, debe aparecer en su lugar la palabra "Fizz". Si es divisible por 5, debe aparecer la palabra "Buzz". Y si es divisible por ambos, debe aparecer la palabra "FizzBuzz". Por ejemplo, si se proporciona el número 15, la función debe devolver la cadena "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz".

/* function cadena(n = 0) {
  let numero = [];
  for (let i = 1; i <= n; i++) {
    numero.push(i);
  }
  // console.log(numero);
  console.log(numero.join(" , "));
}

cadena(5); */

/* function Multiplos(n = 0) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
    console.log(i);
  }
}

Multiplos(15); */
