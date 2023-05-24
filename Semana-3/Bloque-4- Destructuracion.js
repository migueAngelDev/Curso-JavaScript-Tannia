// console.log("Destructuracion")
// DESTRUCTURACION

// EJERCICIO 1

// Destructuración de arreglos: Dado el arreglo let numeros = [1, 2, 3, 4, 5], si se utiliza la destructuración para asignar las variables primero, segundo y tercero a los primeros tres elementos del arreglo.

/* let numeros = [1, 2, 3, 4, 5];

let [primero, segundo, tercero] = numeros;

console.log(`${primero} , ${segundo} , ${tercero}`); */

// EJERCICIO 2

//  Destructuración de objetos: Dado el objeto let persona = { nombre: "Juan", edad: 30, ciudad: "Bogotá" }, utiliza la destructuración para asignar las variables nombre y ciudad a las propiedades correspondientes del objeto.

/* let persona = { nombre: "Juan", edad: 30, ciudad: "Bogotá" };

let { nombre, ciudad } = persona;

console.log(`${nombre} , ${ciudad}`); */

// EJERCICIO 3

// Destructuración en parámetros de función: Escribe una función llamada sumarPares que reciba un arreglo de números y sume solo los elementos pares utilizando la destructuración en los parámetros de la función.

/* function sumarPares([...digitos]) {
  let suma = 0;
  for (const numero of digitos) {
    if (numero % 2 === 0) {
      suma += numero;
    }
  }

  console.log(suma);
}

sumarPares([2, 5, 7, 5, 6]); */

// EJERCICIO 4

// Destructuración con valores predeterminados: Dado el objeto let persona = { nombre: "Juan", edad: 30 }, utiliza la destructuración para asignar las variables nombre, edad y ciudad a las propiedades correspondientes del objeto, pero utiliza "Bogotá" como valor predeterminado para ciudad en caso de que no esté definido.

/* // let persona = { nombre: "Juan", edad: 30, ciudad: undefined };


let persona = { nombre: "Juan", edad: 30, ciudad: undefined };

let { nombre, edad, ciudad = "Bogota" } = persona;

console.log(`${nombre} , ${edad} , ${ciudad}`);
 */

// EJERCICIO 5
// Destructuración de arreglos anidados: Dado el arreglo let numeros = [1, [2, 3], 4, 5], utiliza la destructuración para asignar las variables primero, segundo y tercero a los primeros tres elementos del arreglo, pero utiliza la destructuración de arreglos anidados para asignar la variable tercer Elemento al segundo elemento del arreglo anidado.

/* let numeros = [1, [2, 3], 4, 5];

let [primero, [segundo, tercerElemento], tercero, cuarto] = numeros;

tercerElemento = tercero;

console.log(`${primero}, ${segundo}, ${tercerElemento}, ${tercero}, ${cuarto}`);
 */
