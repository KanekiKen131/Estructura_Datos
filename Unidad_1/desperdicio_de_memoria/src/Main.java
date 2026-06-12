import java.util.ArrayList;
import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {

        int cantidadElementos = 100000;
        long memoriaIdeal = cantidadElementos * 4;

        CompararEstructuras estructura = new CompararEstructuras(cantidadElementos);
        AnalizadorMemoria analizador = new AnalizadorMemoria();

        //arreglo
        analizador.iniciarMedicion();
        int[] arreglo = estructura.crearArregloPrimitivo();
        analizador.finalizarMedicion();
        mostrarResultado("arreglo int[]", analizador, memoriaIdeal);

        //arrayList
        analizador.iniciarMedicion();
        ArrayList<Integer> lista = estructura.crearArrayList();
        analizador.finalizarMedicion();
        mostrarResultado("arrayList", analizador, memoriaIdeal);

        //linkedList
        analizador.iniciarMedicion();
        LinkedList<Integer> listaEnlazada = estructura.crearLinkedList();
        analizador.finalizarMedicion();
        mostrarResultado("ainkedList", analizador, memoriaIdeal);
    }

    private static void mostrarResultado(String nombre, AnalizadorMemoria analizador, long memoriaIdeal) {
        System.out.println("--- " + nombre + " ---");
        System.out.println("Memoria: " + analizador.obtenerMemoriaConsumida());
        System.out.println("Desperdicio: " + analizador.calcularPorcentajeDesperdicio(memoriaIdeal) + "%\n");
    }
}