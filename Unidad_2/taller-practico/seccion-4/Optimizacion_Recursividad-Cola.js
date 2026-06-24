function factorialCola(n, acumulador = 1) {
  //caso base: cuando n llega a 0, el acumulador ya tiene el resultado final
  if (n === 0) return acumulador;

  //caso recursivo de la cola: la multiplicación ocurre ANTES de la llamada,
  // no después. No hay operación pendiente al retornar.
  return factorialCola(n - 1, n * acumulador);
}

console.log(factorialCola(5));  // 120
console.log(factorialCola(10)); // 3628800