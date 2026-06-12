public class PilaPaquete {
    private Paquete[] stack;
    private int top;

    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1; //Por que vamos a inicializar el -1?
    }

    public void push(Paquete p){
        if (top == stack.length - 1) {
            System.out.println("Pila llena, no se puede agregar el paquete.");
            return;
        }
        stack[++top] = p;  //¿'09876544334primero incrementa top, luego inserta
    }


    public Paquete pop(){
        //trabajar con  lifo la clase centro distribucion
        if (top == -1) {
            System.out.println("Pila vacía.");
            return null;
        }
        Paquete p = stack[top];
        stack[top] = null;  //libera referencia
        top--;
        return p;
    }

}
