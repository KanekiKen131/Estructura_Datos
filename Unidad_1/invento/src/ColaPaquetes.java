public class ColaPaquetes {
    private Paquete[] queue;
    private int frente, fin, total;

    public ColaPaquetes(int capacidad){
        this.queue = new Paquete[capacidad];
        this.frente = 0;
        this.fin = 0;
        this.total = 0;
    }

    public void enqueue(Paquete p){
        //TODO: Construir la logica mediante el uso de operador modulo (%)
        if (total == queue.length) {
            System.out.println("Cola llena, no se puede agregar el paquete.");
            return;
        }
        queue[fin] = p;
        fin = (fin + 1) % queue.length;  //operador módulo para cola circular
        total++;
    }


    public Paquete dequeue(){
        //TODO: Implementar la logica FIFO
        if (total == 0) {
            System.out.println("Cola vacía.");
            return null;
        }
        Paquete p = queue[frente];
        queue[frente] = null;            //libera referencia
        frente = (frente + 1) % queue.length;  //avanza circularmente
        total--;
        return p;
    }
}
