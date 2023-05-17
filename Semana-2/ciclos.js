// Ejercicios para el vídeo 15 ciclos (Loops):

// Ciclo while:
// Escribe un programa que solicite al usuario que ingrese un número y luego imprima los números desde 1 hasta ese número utilizando un ciclo while.

// function numeros(numero) {
//   let contador = 1;

//   while (contador <= numero) {
//     console.log(contador), contador++;
//   }
// }
// let num = prompt("Ingrese un numero");
// numeros(num);

// Ciclo do-while:
// Escribe un programa que solicite al usuario que ingrese un número y luego imprima los números pares desde ese número hasta 1 utilizando un ciclo do-while.

// function numerosPares(numero) {
//   do {
//     if (numero % 2 === 0) {
//       console.log(numero);
//     } else if (numero === 1) console.log(numero);
//     numero--;
//   } while (numero >= 1);
// }
// let num = prompt("Ingrese un numero");
// numerosPares(num);

// Ciclo for:
// Escribe un programa que solicite al usuario que ingrese un número y luego calcule la suma de los números pares desde 2 hasta ese número utilizando dos ciclos for.

// function numerosPares(numero) {
//   let suma = 0;
//   for (let i = 2; i <= numero; i++) {
//     if (i % 2 === 0) {
//       suma += i;
//       console.log(i);
//     }
//   }
//   console.log(`la suma de los pares es de ${suma}`);
// }

// let ingresar = prompt("ingresa un número");
// numerosPares(ingresar);

// como es con dos for AHHHHHH

// Ciclo for in:
// Escribe un programa que tenga un objeto con las siguientes propiedades: nombre, edad y ciudad. Luego, utiliza un ciclo for...in para imprimir cada propieidad y su valor en la consola.

// function detalles(tan) {
//   for (const propiedad in tan) {
//     console.log(`${propiedad}: ${tan[propiedad]}`);
//   }
// }

// detalles({ nombre: "tannia", edad: 19, ciudad: "Coatzacoalcos" });

// Ciclo for of:
// Escribe un programa que tenga un arreglo con los nombres de varias frutas. Luego, utiliza un ciclo for...of para imprimir cada fruta en la consola.

// function frutas(frutas) {
//   for (const i of frutas) {
//     console.log(i);
//   }
// }

// frutas(["rambután", "mango", "manzana", "uva", "sandía"]);

//
