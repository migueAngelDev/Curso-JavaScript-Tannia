// Ejercicios para el vídeo 16 manejo de errores (try...catch):

// Raíz Cuadrada

/* try {
  let y = parseFloat(prompt("Ingresa un número para sacar la raíz cuadrada"));
  let x;

  if (y >= 0) {
    x = y ** 0.5;
    console.log(`La raíz cuadrada de ${y} es ${x}`);
  } else {
    throw new Error("Por favor, ingresa un número positivo");
  }
} catch (error) {
  console.log(error);
} */

// La raíz cuadrada es 2 por lo tanto es un 1/2 , entonces como exponente es, si tengo
// raíz de 25, sería tener como exponente/potencia 1/2(vale 0.5),  25^1/2 = a 25^0.5 = usando los operadores ** 0.5
//Tannia ahora hasta como sacar la potencia

// Escribe un programa que solicite al usuario que ingrese dos números y luego calcule la división del primer número por el segundo número. Si el segundo número es cero, el programa debe mostrar un mensaje de error indicando que la división por cero no es posible.

/* try {
  let number1 = parseFloat(prompt("Ingrese el primer número"));
  let number2 = parseFloat(prompt("Ingrese el segundo número"));
  let division;

  if (number2 === 0) {
    throw new Error("La división por cero no es posible");
  }
  division = number1 / number2;
  console.log(
    `El resultado de la división de ${number1} entre ${number2} es ${division}`
  );
} catch (error) {
  console.log(error);
}
 */

// Escribe una función que acepte un objeto como parámetro y luego intente acceder a una propiedad que no existe en el objeto. Si la propiedad no existe, la función debe lanzar una excepción con un mensaje de error personalizado indicando que la propiedad no existe.

/* try {
  function existe(objeto, propiedad) {
    for (let key in objeto) {
      if (key === propiedad) {
        return objeto[key];
      }
    }
    throw new Error("La propiedad " + propiedad + " no existe en el objeto.");
  }
  console.log(existe({ nombre: "Tannia", edad: 19 }, "edad"));
} catch (error) {
  console.error(error);
}
 */

//me costo donde poner le throw - requeri apoyo
