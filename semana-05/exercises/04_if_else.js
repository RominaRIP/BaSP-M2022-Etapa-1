console.log('--EXERCISE 4: IF ELSE');

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. */
console.log('-Exercise 4.a:');

let a = Math.random();
function testNumber(a) {
  let result;
  if (a >= 0.5) {
    result = 'Greater than 0,5';
  } else {
    result = 'Lower than 0,5';
  }
  return result;
};

console.log(testNumber(a));

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años. */
console.log('-Exercise 4.b.i:');

function age(min, max) { 
  min = Math.ceil(0);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function testData(age) {
  let ages;
    if (age < 2) {
      ages = 'Bebe';
    } else if (age >= 2 && age <= 12) {
      ages = 'Niño';
    } else if (age >= 13 && age <= 19) {
      ages = 'Adolescente';
    } else if (age >= 20 && age <= 30) {
      ages = 'Joven';
    } else if (age >= 31 && age <= 60) {
      ages = 'Adulto';
    } else if (age >= 61 && age <= 75) {
      ages = 'Adulto mayor';
    } else {
      ages = 'Anciano';
    }
  return ages;
};

console.log(testData(age(0, 100)));