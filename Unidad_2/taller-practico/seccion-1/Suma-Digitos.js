function sumaDigitos(n) {
    // TODO: Implementar el Caso Base
  //si n tiene un solo digito ya sea 0 a 9 se lo retorna directamente 
  if (n < 10) 
    return n
    // TODO: Implementar el Caso Recursivo
  //sumamos el ultimo digito (n % 10) mas la suma del resto para obtener la recursividad
  return (n % 10) + sumaDigitos(Math.floor(n / 10))
}

// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)")
console.assert(sumaDigitos(0)    === 0,  "Error en sumaDigitos(0)")
console.assert(sumaDigitos(9)    === 9,  "Error en sumaDigitos(9)")
console.log("Ejercicio 1.1 superado.")