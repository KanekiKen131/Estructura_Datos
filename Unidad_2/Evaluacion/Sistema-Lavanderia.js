
const ColaCircular = require("./Cola-Circular")

class SistemaLavanderia {
  /**
   * @param {number} capacidadCola - Tamaño máximo de la cola de espera
   * @param {number} numLavadoras  - Numero de lavadoras disponibles
   */
  constructor(capacidadCola = 8, numLavadoras = 3) {
    this.cola = new ColaCircular(capacidadCola);
    this.lavadoras = Array.from({ length: numLavadoras }, (_, i) => ({
      id: i + 1,
      ocupada: false,
      cliente: null,
    }))
    this.totalAtendidos = 0;
    this.log = []
  }

  /** agrega un cliente a la cola de espera */
  llegaCliente(nombre, servicio) {
    const cliente = {
      nombre,
      servicio,
      horaLlegada: new Date().toLocaleTimeString("es"),
    }
    this.cola.enqueue(cliente)
    this._registrar(`Encolado: ${nombre} : ${servicio}`)
    return cliente
  }

  /** atiende al próximo cliente en cola y lo asigna a una lavadora libre */
  atenderSiguiente() {
    const cliente = this.cola.dequeue()
    this.totalAtendidos++
    const lavadoraLibre = this.lavadoras.find(l => !l.ocupada)
    if (lavadoraLibre) {
      lavadoraLibre.ocupada = true
      lavadoraLibre.cliente = cliente.nombre
      this._registrar(`Atendido: ${cliente.nombre} -> Lavadora ${lavadoraLibre.id}`)
    } else {
      this._registrar(`Atendido: ${cliente.nombre} (esperando lavadora disponible)`)
    }
    return cliente
  }

  /** libera una lavadora al terminar el ciclo de lavado */
  liberarLavadora(idLavadora) {
    const lavadora = this.lavadoras.find(l => l.id === idLavadora)
    if (!lavadora || !lavadora.ocupada) {
      throw new Error(`Lavadora ${idLavadora} no existe o ya está libre`)
    }
    const clienteAnterior = lavadora.cliente
    lavadora.ocupada = false
    lavadora.cliente = null
    this._registrar(`Lavadora ${idLavadora} liberada (${clienteAnterior} terminó)`)
  }

  /** consulta quién es el próximo sin modificar la cola */
  proximoCliente() {
    return this.cola.peek()
  }

  /** estado completo del sistema */
  estadoSistema() {
    return {
      cola: this.cola.estado(),
      clientesEnOrden: this.cola.toArray(),
      lavadoras: this.lavadoras.map(l => ({ ...l })),
      totalAtendidos: this.totalAtendidos,
      log: [...this.log],
    }
  }

  _registrar(mensaje) {
    const entrada = `[${new Date().toLocaleTimeString("es")}] ${mensaje}`
    this.log.push(entrada)
    console.log(entrada)
  }
}

module.exports = SistemaLavanderia;