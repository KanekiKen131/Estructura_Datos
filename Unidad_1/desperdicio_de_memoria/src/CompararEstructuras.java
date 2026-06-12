import java.util.ArrayList;
import java.util.LinkedList;
/*
Autor: Cristian Guaman
Fase 1
 */
public class CompararEstructuras {

    private int cantidadElementos;

    public CompararEstructuras(int cantidadElementos) {
        this.cantidadElementos = cantidadElementos;
    }

    //arreglo primitivo int[]
    public int[] crearArregloPrimitivo() {
        int[] arreglo = new int[cantidadElementos];
        for (int i = 0; i < cantidadElementos; i++) {
            arreglo[i] = i;
        }
        return arreglo;
    }

    //arrayList<Integer>
    public ArrayList<Integer> crearArrayList() {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < cantidadElementos; i++) {
            list.add(i);
        }
        return list;
    }

    //lista enlazada simple
    public LinkedList<Integer> crearLinkedList() {
        LinkedList<Integer> lista = new LinkedList<>();
        for (int i = 0; i < cantidadElementos; i++) {
            lista.add(i);
        }
        return lista;
    }
}