
class ColaCircular {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.arr = new Array(capacidad).fill(null)
    this.head = 0  // puntero al próximo elemento a extraer
    this.tail = 0  // puntero a la próxima posición libre para insertar
    this.size = 0  // cantidad de elementos actualmente en cola
  }

  /** verifica si la cola está vacía */
  isEmpty() {
    return this.size === 0
  }

  /** verifica si la cola está llena */
  isFull() {
    return this.size === this.capacidad
  }

  /**
   * inserta un elemento al final de la cola 
   */
  enqueue(elemento) {
    if (this.isFull()) {
      throw new Error(`Cola llena (capacidad máxima: ${this.capacidad})`)
    }
    this.arr[this.tail] = elemento
    this.tail = (this.tail + 1) % this.capacidad
    this.size++

    return this
  }

  /**
   * extrae el elemento más antiguo de la cola 
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Cola vacia, no hay elementos que extraer")
    }
    const elemento = this.arr[this.head]
    this.arr[this.head] = null          // libera la celda (reciclaje)
    this.head = (this.head + 1) % this.capacidad
    this.size--
    return elemento
  }

  /**
   * consulta el proximo elemento sin extraerlo
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error("Cola vacía — nada que consultar")
    }
    return this.arr[this.head]
  }

  /**retorna los elementos en orden  */
  toArray() {
    const resultado = []
    for (let k = 0; k < this.size; k++) {
      resultado.push(this.arr[(this.head + k) % this.capacidad])
    }
    return resultado
  }

  /**retorna un objeto con el estado interno de la cola */
  estado() {
    return {
      arreglo: [...this.arr],
      head: this.head,
      tail: this.tail,
      size: this.size,
      capacidad: this.capacidad,
      ultimoTail: this.size > 0
        ? (this.tail - 1 + this.capacidad) % this.capacidad
        : null,
    }
  }
}

module.exports = ColaCircular;