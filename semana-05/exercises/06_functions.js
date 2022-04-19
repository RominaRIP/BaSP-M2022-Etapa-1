console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
console.log('-Exercise 6.a:');

var x = Math.floor(Math.random()*200);
var y = Math.floor(Math.random()*100);

function suma(x, y) {
    var result = x + y;
    return result;
};

console.log("Resultado: ", suma(x, y), ' = ', x, ' + ', y);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
console.log('-Exercise 6.b:');

function suma2(x, y) {
    if (!isNaN(x) && !isNaN(x)) {
        result = x + y;
        return result;
    } else {
        alert('A value is not a number');
        return NaN;
    }
};

console.log(suma2(x, y));

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número
entero. */
console.log('-Exercise 6.c:');

z = Math.random()*55;

function validateInteger(z) {
    if (Number.isInteger(z)) {
        return 'True';
    } else {
        return 'False';
    }
};

console.log(validateInteger(z));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
console.log('-Exercise 6.d:');

function suma3(x, y) {
    if (!isNaN(x) && !isNaN(x)){
        result = x + y;
        console.log(result);
    } else if (!isNaN(x) && !Number.isInteger(x)) {
        alert('First value is not an integer. Try with: ');
        console.log(Math.round(x));
    } else if (!isNaN(y) && !Number.isInteger(y)) {
        alert('Second value is not an integer. Try with: ');
        console.log(Math.round(y));    
    } else {
        alert('A value is not a number');
        console.log(NaN);
    }
};

suma3(x, y);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual. */
console.log('-Exercise 6.e:');

function validateInteger2(x, y) {
    if (!isNaN(x) && !Number.isInteger(x)) {
        alert('First value is not not an integer. Try with: ');
        console.log(Math.round(x));
    } else if (!isNaN(y) && !Number.isInteger(y)) {
        alert('Second value is not not an integer. Try with: ');
        console.log(Math.round(y));    
    } else {
        return NaN;
    }
};

function suma4(x, y) {
    validateInteger2(x, y);
    if (!isNaN(x) && !isNaN(x)){
        result = x + y;
        console.log(result);
    } else {
        alert('A value is not a number');
        console.log(NaN);
    }
};

suma4(x, y)