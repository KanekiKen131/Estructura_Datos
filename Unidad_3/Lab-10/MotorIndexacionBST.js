class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;     
        this.urlCache = urlCache;   
        this.visitas = 1;         
        this.izquierdo = null;
        this.derecho = null;
    }
}

class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarNodo(this.raiz, nuevoNodo);
        }
    }

    // TAREA DEL ESTUDIANTE: Implementar comparación alfabética 
    _insertarNodo(nodoActual, nuevoNodo) {
        let actual = nodoActual;

        while (true) {
            const comparacion = nuevoNodo.keyword.localeCompare(actual.keyword);

            if (comparacion === 0) {
                actual.visitas++;
                return;
            } else if (comparacion < 0) {
            
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo;
                    return;
                }
                actual = actual.izquierdo;
            } else {
        
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo;
                    return;
                }
                actual = actual.derecho;
            }
        }
    }

    // TAREA DEL ESTUDIANTE: Implementar lógica iterativa o recursivate
    buscar(keyword) {
        let actual = this.raiz;
        let ciclosCPU = 0;

        while (actual !== null) {
            ciclosCPU++;
            const comparacion = keyword.localeCompare(actual.keyword);

            if (comparacion === 0) {
                return { encontrado: true, nodo: actual, ciclosCPU };
            } else if (comparacion < 0) {
                actual = actual.izquierdo;
            } else {
                actual = actual.derecho;
            }
        }

        return { encontrado: false, nodo: null, ciclosCPU };
    }

    // Tarea del estudiante: Exportar el historial completo en orden alfabético 
    exportarHistorial(nodo = this.raiz) {
        const resultado = [];
        const pila = [];
        let actual = nodo;

        while (actual !== null || pila.length > 0) {
            while (actual !== null) {
                pila.push(actual);
                actual = actual.izquierdo;
            }
            actual = pila.pop();
            resultado.push({ keyword: actual.keyword, urlCache: actual.urlCache, visitas: actual.visitas });
            actual = actual.derecho;
        }

        return resultado;
    }

    altura() {
        if (this.raiz === null) return -1;
        let nivel = -1;
        let colaActual = [this.raiz];

    }
}
