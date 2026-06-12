public class ListaSimple {

    public static void main(String[] args) {

        Nodo A = new Nodo(10);
        Nodo B = new Nodo(20);
        Nodo C = new Nodo(30);
        Nodo D = new Nodo(40);

        // Enlaces
        A.next = B;
        B.next = C;
        C.next = D;

        Nodo head = A;

        Nodo anterior = Nodo.encontrarAnterior(head, D);

        System.out.println(anterior.dato);
    }

}