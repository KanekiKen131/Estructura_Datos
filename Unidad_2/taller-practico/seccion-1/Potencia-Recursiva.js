function potencia(base, exponente) {
    // TODO: Implementar algoritmo recursivo optimizado
  //caso base: cualquier numero que se eleve a 0 se convertira en 1
  if (exponente === 0) 
    return 1

  //caso recursivo par: se calcula la mitad del valor solo una vez y de ahi la elevamos al cuadrado

  if (exponente % 2 === 0) {
    const mitad = potencia(base, exponente / 2)
    return mitad * mitad
  }

  //caso recursivo impar: se utiliza una formula la cual es -> base * (base^((exponente-1)/2))^2
  const mitad = potencia(base, Math.floor(exponente / 2))
  return base * mitad * mitad
}
//Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)")
console.assert(potencia(5, 3)  === 125,  "Error en potencia(5, 3)")
console.assert(potencia(7, 0)  === 1,    "Error en potencia(7, 0)")
console.log("Ejercicio 1.2 superado.")