// // console.log("Objetos Literales")

// // OBJETOS LITERALES

// //EJERCICIO 1

// // Creación de objeto: Crea un objeto llamado persona con las propiedades nombre, edad y ciudad. Asigna valores a estas propiedades y luego muestra el objeto completo en la consola.

// /* let persona = { nombre: "Tannia", edad: 19, ciudad: "Coatzacoalcos" };

// console.log(persona); */

// //EJERCICIO 2

// // Propiedades dinámicas: Crea un objeto llamado producto con las propiedades nombre, precio y cantidad. Luego, solicita al usuario mediante un prompt que ingrese el valor de la propiedad cantidad y asigna ese valor al objeto. Finalmente, muestra el objeto completo en la consola.

// /* let producto = { nombre: "Pupis", precio: 160223, cantidad: undefined };

// let ingresarCantidad = prompt("ingresa la cantidad del producto");

// producto.cantidad = ingresarCantidad;

// console.log(producto); */

// // EJERCICIO 3

// // Métodos en objetos: Crea un objeto llamado calculadora con los métodos sumar, restar, multiplicar y dividir.Cada método debe recibir dos números como parámetros y retornar el resultado de la operación correspondiente.Luego, solicita al usuario mediante prompts que ingrese los dos números para realizar una operación y la operación a realizar(suma, resta, multiplicación o división) y muestra el resultado en la consola.

// let calculadora = {
//   sumar: function (num1, num2) {
//     return num1 + num2;
//   },
//   restar: function (num1, num2) {
//     return num1 - num2;
//   },
//   multiplicar: function (num1, num2) {
//     return num1 * num2;
//   },
//   dividir: function (num1, num2) {
//     return num1 / num2;
//   },
// };
// let num1 = parseInt(prompt("Ingrese un primer numero"));
// let num2 = parseInt(prompt("Ingrese un segundo numero"));
// let operacion = prompt(
//   "Ingrese el tipo de operacion que desea hacer(sumar, restar, multiplicar, dividir)"
// );
// let resultado;
// if (operacion === "sumar") {
//   resultado = calculadora.sumar(num1, num2);
//   console.log("El resultado es de la suma es: " + resultado);
// } else if (operacion === "restar") {
//   resultado = calculadora.restar(num1, num2);
//   console.log("El resultado es la resta es: " + resultado);
// } else if (operacion === "multiplicar") {
//   resultado = calculadora.multiplicar(num1, num2);
//   console.log("El resultado es de la multiplicación es: " + resultado);
// } else if (operacion === "dividir" && num2 > 0) {
//   resultado = calculadora.dividir(num1, num2);
//   console.log("El resultado es de la división es: " + resultado);
// } else {
//   console.log("Operación inválida");
// }

// // EJERCICIO 4

// // Propiedades calculadas: Crea un objeto llamado cuadrado con las propiedades lado, area y perimetro. La propiedad lado debe ser un número que se solicita al usuario mediante un prompt. Las propiedades area y perimetro deben ser calculadas en base al valor de la propiedad lado. Finalmente, muestra el objeto completo en la consola.

// /* let lado = parseFloat(
//   prompt("Ingresa un numero para el valor del lado del cuadrado")
// );

// let area = lado * lado;
// let perimetro = lado * 4;

// let cuadrado = { lado: lado, area: area, perimetro: perimetro };
// console.log(cuadrado); */

// // EJERCICIO 5

// // Objetos anidados: Crea un objeto llamado agenda que contenga los contactos de una agenda telefónica. Cada contacto debe ser un objeto con las propiedades nombre, telefono y email. Crea al menos tres contactos y agrégalos al objeto agenda. Finalmente, muestra el objeto completo en la consola.

// /* let agenda = {
//   contacto1: {
//     nombre: "Tannia",
//     telefono: 9212333178,
//     email: "ctannia053@gmail.com",
//   },

//   contacto2: {
//     nombre: "Miguel",
//     telefono: 9213048384,
//     email: "xxxxdjmigue2020xxxx@gmail.com",
//   },

//   contacto3: {
//     nombre: "Penelope",
//     telefono: 9211602231,
//     email: "meangirl@gmail.com",
//   },
// };

// console.table(agenda); */
