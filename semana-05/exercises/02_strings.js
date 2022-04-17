console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
// toUpperCase).

console.log('-Exercise 2.a:');

var string5;
string5 = 'murciélago';
resultUpperCase = string5.toUpperCase( );

console.log(resultUpperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var string6, stringFirst;
string6 = 'fenomenología';
stringFirst = string6.substring(0, 5);

console.log(stringFirst);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');

var string7, stringLast;
string7 = 'misterioso';
stringLast = string7.substring(7, 10);

console.log(stringLast);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
// en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
// toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var string8, stringUp, stringCutA, stringCutB, stringLow, stringFirstCap;
string8 = 'melancolía';
stringUp = string8.toUpperCase( );
stringCutA = stringUp.substring(0, 1);
stringCutB = string8.substring(1, 10);
stringLow = stringCutB.toLowerCase( );
stringFirstCap = stringCutA + stringLow;

console.log(stringFirstCap);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
// primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');

var string9, indexSpace;
string9 = 'heavy metal';
indexSpace = string9.indexOf(' ');

console.log(indexSpace);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
// palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
// operador +).

console.log('-Exercise 2.f:');

var string10, stringSpace10, indexSpace10, stringCut10A, stringUp10A, stringCut10B, stringCut10C, stringUp10B, length10,
stringCut10D, stringFirstCap10;
string10 = 'mistery machine';
stringSpace10 = ' ';
indexSpace10 = string10.indexOf(' ');
stringCut10A = string10.substring(0, 1);
stringUp10A = stringCut10A.toUpperCase( );
stringCut10B = string10.substring(1, indexSpace10);
stringCut10C = string10.substring(indexSpace10+1, (indexSpace10 + 2));
stringUp10B = stringCut10C.toUpperCase( );
length10 = string10.length;
stringCut10D = string10.substring((indexSpace10 + 2), length10);
stringFirstCap10 = stringUp10A + stringCut10B + stringSpace10 + stringUp10B + stringCut10D;


console.log(stringFirstCap10);