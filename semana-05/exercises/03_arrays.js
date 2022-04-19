console.log('--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
console.log('-Exercise 3.a:');

var year, monthA, monthB, months1;
year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
monthA = year.slice(4, 5);
monthB = year.slice(10, 11);
months1 = monthA + ' ' + monthB;

console.log(months1);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log('-Exercise 3.b:');

var yearSort;
yearSort = year.sort( );

console.log(yearSort);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
console.log('-Exercise 3.c:');

var firstElementArray, lastElementArray;
firstElementArray = year.unshift("Inicio");
lastElementArray = year.push("Final");

console.log(year);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */
console.log('-Exercise 3.d:');

var firstDelElementArray, lastDelElementArray;
firstDelElementArray = year.shift("Inicio");
lastDelElementArray = year.pop("Final");

console.log(year);

/* e. Invertir el orden del array (utilizar reverse). */
console.log('-Exercise 3.e:');

year.reverse( );

console.log(year);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */
console.log('-Exercise 3.f:');

var yearJoined;
yearJoined = year.join(" - ")

console.log(yearJoined);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
console.log('-Exercise 3.g:');

var year2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
var yearSliced;
yearSliced = year2.slice(4, 10);

console.log(yearSliced);