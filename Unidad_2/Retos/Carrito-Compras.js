    //agregar un producto o mas y tiene que sumar el
    //total del precio y tambien tiene que disminuir el total de items que esta seleccionando

    /*
    Author: Leonel Lima (LMess131)
    */

let productos = [
  { nombre: "Camisa",   precio: 25, stock: 10 },
  { nombre: "Pantalon", precio: 40, stock: 5 },
  { nombre: "Zapatos",  precio: 60, stock: 8 },
  { nombre: "Chompas", precio: 12, stock: 10 }
]

//arreglo donde se guarda lo que se va comprando
let carrito = []

let totalPrecio = 0;

function agregarProducto(indice, cantidad) {
  let producto = productos[indice]

  if (producto.stock < cantidad) {
    console.log("No hay suficiente stock de " + producto.nombre);
    return
  }

  //agrega al carrito
  carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: cantidad })

  //suma al total del precio
  totalPrecio += producto.precio * cantidad;

  //disminuye el stock 
  producto.stock -= cantidad

  console.log("Se agrego: " + producto.nombre + " x" + cantidad)
}


agregarProducto(0, 3); //camisa estaa en la posicion 0, -> selecciono 2 camisas
agregarProducto(2, 1); //zapatos esta en la posicion 2 -> seleccion 1 zapato
agregarProducto(1,4); //pantalones esta en la posicion 1 -> selecciona 4 pantalones

console.log("\nCarrito:");
console.log(carrito);

console.log("\nTotal a pagar: $" + totalPrecio);

console.log("\nStock restante:");
console.log(productos);


