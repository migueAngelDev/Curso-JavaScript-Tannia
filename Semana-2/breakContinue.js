// Ejercicio para el vídeo 17 break and continue:

// Escribe un programa que solicite al usuario que ingrese una serie de números y luego encuentre el primer número par en la serie. Si no hay ningún número par, el programa debe imprimir un mensaje que indique que no se encontró ningún número par.

/* let serieNumber = prompt(
  "Ingresa una serie de numeros separados por coma"
).split(",");

let number = serieNumber.map(Number);
for (let i = 0; i < number.length; i++) {
  //console.log(serieNumber[i]);

  if (number[i] % 2 === 0) {
    console.log(`El primer par es: ${number[i]}`);
    break;
  } else if (i === number.length - 1) {
    console.log("En la serie no hay numeros pares");
  }
} // indice de 0 y ultimo de -1, por lo que -1    i !== number.length - 1, METODOS
 */
// ------------------------------------------------------------------------------------

// Escribe un programa que solicite al usuario que ingrese una cadena de texto. El programa debe imprimir la cadena de texto sin vocales.
// vi mas videos
// no se podia  // recordando cosas que Ángel tiene en sus ejercicios

/* let cadena = prompt("Ingresa un texto");
let cadenaTwo = []; //meterla dentro de 

for (let i = 0; i < cadena.length; i++) {
  let letra = cadena[i].toLowerCase();

  if (
    letra !== "a" &&
    letra !== "e" &&
    letra !== "i" &&
    letra !== "o" &&
    letra !== "u"
  ) {
    // console.log(letra);
    cadenaTwo.push(cadena[i]);
  }
}

console.log(`La nueva cadena de texto es: ${cadenaTwo.join("")} `); */
// ------------------------------------------------------------------------------------
// Escribe un programa que genere números aleatorios del 1 al 100 hasta que se genere un número múltiplo de 7.
// Si el número generado es impar, el programa debe continuar generando números aleatorios.Si el número generado es par,
// el programa debe interrumpir el ciclo y mostrar el número generado.

/* let nuevo = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    let nuevo = i;
    console.log(nuevo);
    console.log("x");
  }
} */

// usar continue para salir del numero aleatorio de multiplo de 7 pero que no sea par
// TT TT TT TT TT TT TT TT TT TT

function generateNumberRandom() {
  function numberRandom() {
    return Math.round(Math.random() * 100);
  }

  let number = numberRandom();

  console.log(number);

  while (number > 0) {
    if (number % 7 === 0) {
      console.log(`El número generado ha sido múltiplo de 7: ${number}`);
      break;
    } else if (number % 2 === 0) {
      console.log(`El número generado ha sido múltiplo de 2: ${number}`);
      break;
    } else {
      generateNumberRandom();
      break;
    }
  }
}

generateNumberRandom();
