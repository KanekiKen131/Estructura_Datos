function invertirArreglo(arr, inicio, fin) {
// TODO: Identificar la condición de parada (Caso Base)
//cuando inicio es mayor o igual a fin, ya no hay elementos que intercambiar
    if (inicio >= fin) 
        return
// TODO: Realizar el intercambio e invocar la recursividad

//intercambiamos los elementos en los extremos
let elementos = arr[inicio]
  arr[inicio] = arr[fin]
  arr[fin] = elementos

//con esto podemos avanzar hacia el centro del arreglo
    invertirArreglo(arr, inicio + 1, fin - 1)
}


// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40,
30, 20, 10]));
console.log("Ejercicio 2.1 superado.")