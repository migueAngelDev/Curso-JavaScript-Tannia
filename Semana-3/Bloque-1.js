// 1. Cadena de textos y arreglos: Escribe una función que tome una cadena de texto como parámetro y devuelva un arreglo con las palabras en orden inverso.

// Por ejemplo, si se proporciona la cadena "Hola mundo, ¿cómo estás?", la función debe devolver el arreglo ["estás?", "cómo", "¿mundo,", "Hola"].

// No puedo usar reverse si no es un arreglo

/* function texto(mensaje = "") {
  console.log(mensaje.split(" ").reverse());
}

texto("2030 espero por ti"); */

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

// 3. Booleanos y objetos: Escribe una función que tome un objeto como parámetro y devuelva verdadero si todos los valores en el objeto son booleanos verdaderos, y falso de lo contrario.

// Por ejemplo, si se proporciona el objeto {a: true, b: false, c: true}, la función debe devolver falso.

// 4. Undefined, null, NaN y funciones: Escribe una función que tome un arreglo de valores como parámetro y devuelva la suma de los valores numéricos en el arreglo. La función debe ignorar los valores que sean undefined, null o NaN.

// Por ejemplo, si se proporciona el arreglo [1, null, "hola", undefined, NaN, 3], la función debe devolver 4.

// 5. Funciones y tipos de operadores: Escribe una función que tome un arreglo de números como parámetro y devuelva un objeto con dos propiedades: "suma" y "promedio". La propiedad "suma" debe contener la suma de todos los números en el arreglo, y la propiedad "promedio" debe contener el promedio de los números en el arreglo.

// Por ejemplo, si se proporciona el arreglo [1, 2, 3, 4, 5, 6], la función debe devolver el objeto {suma: 21, promedio: 3.5}.

/* function numeros(n = []) {
  let suma = 0;
  for (let i = 0; i < n.length; i++) {
    suma += n[i];
  }

  let promedio = suma / n.length;

  let objeto = {
    sumita: suma,
    promedio: promedio,
  };

  console.log(objeto);
}

numeros([10, 10, 10, 10, 10]);
numeros([1, 2, 3, 4, 5, 6]); */

// push es de arreglos asi que no puedo usarlo
