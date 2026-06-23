/*
  Problema que resuelve:
  En la cocina de un restaurante, los pedidos deben prepararse en el mismo
  orden en que llegan a la cocinera. El primer pedido que ingresa a cocina
  es el primero en prepararse y entregarse, sin excepciones. Esto evita que
  algun pedido se quede esperando indefinidamente mientras se preparan
  pedidos que llegaron despues, y refleja cómo trabaja realmente una cocina
  organizada: por orden de llegada.
 */

class Pedido {
  constructor(id, mesa, items) {
    this.id = id
    this.mesa = mesa
    this.items = items 
    this.horaIngreso = new Date().toLocaleTimeString()
  }
}

class CocinaRestaurante {
  constructor() {
    this.colaPedidos = []
    this.historialEntregados = []
    this.contador = 1
  }

  //el mesero registra un nuevo pedido en la cocina
  recibirPedido(mesa, items) {
    const pedido = new Pedido(this.contador++, mesa, items)
    this.colaPedidos.push(pedido)
    console.log(`Pedido #${pedido.id} (Mesa ${mesa}) ingresado a cocina.`)
    return pedido
  }

  //el cocinero prepara y entrega el pedido que está al frente de la fila
  prepararSiguiente() {
    if (this.isEmpty()) {
      console.log('No hay pedidos pendientes en cocina.')
      return null
    }

    const pedido = this.colaPedidos.shift()
    pedido.horaEntrega = new Date().toLocaleTimeString()
    this.historialEntregados.push(pedido)

    console.log(
      ` Pedido #${pedido.id} (Mesa ${pedido.mesa}) entregado: ${pedido.items.join(', ')}`
    )
    return pedido;
  }

  //consulta cual es el proximo pedido sin retirarlo de la cola
  verSiguientePedido() {
    return this.isEmpty() ? null : this.colaPedidos[0]
  }

  isEmpty() {
    return this.colaPedidos.length === 0
  }

  pedidosPendientes() {
    return this.colaPedidos.length
  }

  mostrarEstadoCocina() {
    console.log('--- Estado actual de cocina ---')
    console.log('En espera (orden de llegada):', this.colaPedidos.map(p => `#${p.id} (Mesa ${p.mesa})`))
    console.log('Entregados:', this.historialEntregados.length)
    console.log('--------------------------------')
  }
}

// Simulacion
const cocina = new CocinaRestaurante();

cocina.recibirPedido(5, ["Bandeja paisa", "Jugo de mora"])
cocina.recibirPedido(2, ["Hamburguesa", "Papas fritas"])
cocina.recibirPedido(8, ["Pollo a la plancha"])
cocina.recibirPedido(3, ["Pizza"])

cocina.mostrarEstadoCocina()

console.log("\nPróximo a preparar:", cocina.verSiguientePedido().items)

//el cocinero va preparando los pedidos en el orden exacto en que llegaron
cocina.prepararSiguiente(); // mesa 5 (primero)
cocina.prepararSiguiente(); // mesa 2 (segundo)
cocina.mostrarEstadoCocina();

console.log(`\nPedidos pendientes: ${cocina.pedidosPendientes()}`)

module.exports = { CocinaRestaurante, Pedido }