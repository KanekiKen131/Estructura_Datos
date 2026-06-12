public class Nodo {

    int dato;
    Nodo next;

    public Nodo(int dato) {
        this.dato = dato;
        this.next = null;
    }

    public static Nodo encontrarAnterior(Nodo head, Nodo actual) {

        // Si el nodo actual es el primero
        if (head == actual) {
            return null;
        }

        Nodo temp = head;

        // Recorre la lista
        while (temp != null) {

            // Verifica si el siguiente es el nodo actual
            if (temp.next == actual) {
                return temp;
            }

            temp = temp.next;
        }

        return null;
    }
}