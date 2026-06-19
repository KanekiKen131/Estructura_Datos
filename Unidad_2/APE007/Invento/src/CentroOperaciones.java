public class CentroOperaciones {

    /*
    Author: Leonel Lima (LMess131)
    */
    public static int buscarLineal(Paquete[] lista, int id) {
        for (int i = 0; i < lista.length; i++) {
            if (lista[i].id == id) return i;
        }
        return -1;
    }

    /*
    Author: Leonel Lima (LMess131)
    */
    public static int buscarBinario(Paquete[] lista, int id) {
        //Valida que el arreglo esté ordenado antes de buscar
        for (int i = 0; i < lista.length - 1; i++) {
            if (lista[i].id > lista[i + 1].id) {
                throw new IllegalStateException(
                    "Error: el arreglo no está ordenado. La búsqueda binaria requiere datos ordenados."
                );
            }
        }

        int bajo = 0, alto = lista.length - 1;
        while (bajo <= alto) {
            int medio = bajo + (alto - bajo) / 2;
            if (lista[medio].id == id) return medio;
            if (lista[medio].id < id) bajo = medio + 1;
            else alto = medio - 1;
        }
        return -1;
    }
}