
const SistemaLavanderia = require("./Sistema-Lavanderia")
const sistema = new SistemaLavanderia(8, 3)

console.log(" SISTEMA DE LAVANDERÍA AUTOMÁTICA \n")

// clientes llegan
sistema.llegaCliente("Ana García",    "Lavado normal")
sistema.llegaCliente("Carlos López",  "Lavado + secado")
sistema.llegaCliente("María Torres",  "Lavado delicado")
sistema.llegaCliente("Jorge Pérez",   "Solo secado")
sistema.llegaCliente("Lucía Díaz",    "Lavado normal")

console.log("\n--- Estado inicial ---")
const e1 = sistema.estadoSistema()
console.log("Orden FIFO:", e1.clientesEnOrden.map(c => c.nombre))
console.log("Arreglo:   ", e1.cola.arreglo.map(c => c ? c.nombre.split(" ")[0] : "∅"))
console.log(`head: ${e1.cola.head}  tail: ${e1.cola.tail}  size: ${e1.cola.size}`)

console.log("\n--- Atendiendo 3 clientes ---")
sistema.atenderSiguiente()
sistema.atenderSiguiente()
sistema.atenderSiguiente()

const e2 = sistema.estadoSistema()
console.log("Arreglo:   ", e2.cola.arreglo.map(c => c ? c.nombre.split(" ")[0] : "∅"))
console.log(`head: ${e2.cola.head}  tail: ${e2.cola.tail}  size: ${e2.cola.size}`)
console.log(" Posiciones 0-2 liberadas y disponibles para reutilización")

console.log("\n--- 3 nuevos clientes (tail da la vuelta circular) ---")
sistema.llegaCliente("Daniel Reyes",  "Lavado + secado")
sistema.llegaCliente("Sofía Herrera", "Lavado normal")
sistema.llegaCliente("Andrés Mora",   "Lavado delicado")

const e3 = sistema.estadoSistema()
console.log("Arreglo:   ", e3.cola.arreglo.map(c => c ? c.nombre.split(" ")[0] : "∅"))
console.log(`head: ${e3.cola.head}  tail: ${e3.cola.tail}  size: ${e3.cola.size}`)

console.log("\n=== Total atendidos:", sistema.estadoSistema().totalAtendidos, "===")