/*
A partir de pedir los tres lados de un triangulo, determinar si es: escaleno, 
isoceles o equilatero
*/

// Variables para los tres lados del triangulo
const lado_1 = parseInt(prompt("Ingrese el largo del lado 1"));
const lado_2 = parseInt(prompt("Ingrese el largo del lado 2"));
const lado_3 = parseInt(prompt("Ingrese el largo del lado 3"));

// Verifico que sea equilatero (tres lados iguales)
if(lado_1 === lado_2 && lado_2 === lado_3) {
  alert("El triangulo es equilatero!");
}
// Sino, verifico que sea isoceles (dos lados iguales)
else if (lado_1 == lado_2 || lado_2 == lado_3 || lado_1 == lado_3) {
  alert("El triangulo es isosceles!");
}
// Si no es ni equilatero, ni isocles, es escaleno
else {
  alert("El triangulo es escaleno!");
}

// Otra forma:

// Verifico que sea equilatero (tres lados iguales)
if(lado_1 === lado_2 && lado_2 === lado_3) {
  alert("El triangulo es equilatero!");
}
// Verificar si es escaleno (tres lados distintos)
else if(lado_1 !== lado_2 && lado_1 !== lado_3 && lado_2 !== lado_3) {
  alert("El triangulo es escaleno!");
}
// Si no es ni equilatero, ni escaleno, es isoceles
else {
  alert("El triangulo es isoceles!");
}