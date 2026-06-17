/*
== 
=== compara si es el mismo tipo numerico y si tienen el mismo valor
===!= si es diferente
!=
!== diferente tipo y valor 

> mayor
< menor

AND 
&&

OR
||

NOT
!



*/

/*
  OPERADORES DE COMPARACIÓN Y LÓGICOS
*/

//  IGUALDAD

// == solo compara el VALOR (no importa el tipo)
console.log(5 == "5");   
console.log(5 == 5);     // true

// === compara VALOR y TIPO (más estricto, recomendado)
console.log(5 === "5");  // false ← diferente tipo
console.log(5 === 5);    // true  ← mismo valor Y mismo tipo

//  DESIGUALDAD

// != diferente valor (no importa el tipo)
console.log(5 != 8);    // true
console.log(5 != "5");  // false ← los trata como iguales

// !== diferente valor O diferente tipo (más estricto, recomendado)
console.log(5 !== "5"); // true  ← diferente tipo
console.log(5 !== 5);   // false ← mismo valor y tipo

//  MAYOR Y MENOR

console.log(10 > 5);   // true  — mayor que
console.log(10 < 5);   // false — menor que
console.log(10 >= 10); // true  — mayor o IGUAL que
console.log(10 <= 9);  // false — menor o igual que


//  OPERADORES LÓGICOS

// AND &&: ambas condiciones deben ser true
let edad = 20;
let tieneID = true;

if (edad >= 18 && tieneID) {
  console.log("Puede entrar");  // las dos son true
}

// OR || : basta con que UNA sea true
let esAdmin = false;
let esModerador = true;

if (esAdmin || esModerador) {
  console.log("Tiene permisos");  // una es true
}

// NOT ! : invierte el valor (true → false / false → true)
let conectado = false;

if (!conectado) {
  console.log("Inicia sesión"); //  !false = true
}