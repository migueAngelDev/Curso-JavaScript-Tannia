// console.log("Estos son los ejercicios de try...catch");

// TRY CATCH

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

console.log(division(10, 2)); */

// EJERCICIO 2

// 2.- Arreglos y manejo de errores: Escribe una función que tome un arreglo como parámetro y devuelva el primer elemento del arreglo.

// Por ejemplo, si se proporciona el arreglo [], la función debe devolver el mensaje de error "El arreglo está vacío".

// function arreglo(arr = []) {
//   // console.log(arr);

//   try {
//     if (arr.length === 0) {
//       throw new Error("El arreglo esta vacio");
//     }
//     return arr[0];
//   } catch (error) {
//     return error.message;
//   }
// }

// console.log(arreglo([0]));

// EJERCICIO 3

// Funciones y manejo de errores: Escribe una función que tome una función y un arreglo como parámetros y llame a la función con cada elemento del arreglo.

// function console.log() > adentro el array por lo que entendi

// Por ejemplo, si se proporciona la función console.log y el arreglo [1, 2, 3, "cuatro"], la función debe llamar a console.log con los números 1, 2 y 3, y devolver el mensaje de error "La función no se puede llamar con 'cuatro'".

/* function ejecutarFuncionConArreglo(funcion, arreglo) {
  const numeros = [];
  let errorEncontrado = false;

  for (let i = 0; i < arreglo.length; i++) {
    try {
      if (typeof arreglo[i] !== "number") {
        throw new Error(
          "La función no se puede llamar con '" + arreglo[i] + "'"
        );
      } else {
        numeros.push(arreglo[i]);
      }
    } catch (error) {
      console.log(error.message);
      errorEncontrado = true;
    }
  }

  if (!errorEncontrado) {
    console.log(numeros);
  }
}

// Ejemplo de uso
function mostrarNumero(numero) {
  console.log(numero);
}

const miArreglo = [1, 2, 3, "csmoacmcoamso"];
ejecutarFuncionConArreglo(mostrarNumero, miArreglo); */

// EJERCICIO 4

// Objetos y manejo de errores: Escribe una función que tome un objeto como parámetro y devuelva el valor de la propiedad "nombre" del objeto.

// Por ejemplo, si se proporciona el objeto {nombre: "Juan", edad: 30}, la función debe devolver el valor "Juan" y si no hay nada mandar en consola el error.

/* try {

//Código que vamos a ejecutar

if (evaluación indica que existe un error) {throw new Error("Descripción del error"); }

}

catch (e) {

   // e representa el error lanzado

   // mensajes de alerta, acciones a ejecutar, etc.

} */

/* function obtenerNombre(obj) {
  try {
    if (!obj.nombre) {
      throw new Error("No existe la propiedad nombre");
    }
    return obj.nombre;
  } catch (error) {
    return error.message;

    // console.error(error);
  }
}

console.log(obtenerNombre({ nombre: "Juan", edad: 30 })); */

// EJERCICIO 5

// Booleans y manejo de errores: Escribe una función que tome un booleano como parámetro y devuelva el booleano inverso.

// Por ejemplo, si se proporciona el valor "123", la función debe devolver el mensaje de error "El parámetro no es un booleano".
/* 
function obtener(p) {
  try {
    if (typeof p !== "boolean") {
      throw new Error("El parámetro no es un booleano");
    }
    return !p;
  } catch (error) {
    return error.message;
  }
}

console.log(obtener(false));
 */
