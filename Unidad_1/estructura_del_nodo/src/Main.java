public static void main(String[] args) {
//Se crea una lista doble para una mayor explicacion
    NodoDoble A = new NodoDoble(10);
    NodoDoble B = new NodoDoble(20);
    NodoDoble C = new NodoDoble(30);
    NodoDoble D = new NodoDoble(40);

    //Enlaces hacia adelante
    A.next = B;
    B.next = C;
    C.next = D;

    //Enlaces hacia atrás
    B.prev = A;
    C.prev = B;
    D.prev = C;

    NodoDoble actual = D;

    //Retrocede directamente
    actual = actual.prev;

    System.out.println("Nodo anterior: " + actual.dato);
}
