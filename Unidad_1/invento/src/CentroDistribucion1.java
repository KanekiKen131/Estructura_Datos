import java.util.ArrayList;
import java.util.Random;

public class CentroDistribucion1 {
    private ArrayList<Paquete> inventario;

    public CentroDistribucion1() {
        this.inventario = new ArrayList<>();
    }

    public void recibirCajaCamion(Paquete p) {
        this.inventario.add(p);
    }

    public void ordenarRutaMergeSort() {
        if (inventario.size() > 1) {
            mergeSort(0, inventario.size() - 1);
        }
    }

    private void mergeSort(int izquierda, int derecha) {
        if (izquierda < derecha) {
            int medio = izquierda + (derecha - izquierda) / 2;
            mergeSort(izquierda, medio);
            mergeSort(medio + 1, derecha);
            merge(izquierda, medio, derecha);
        }
    }

    private void merge(int izquierda, int medio, int derecha) {
        ArrayList<Paquete> temporal = new ArrayList<>();
        int i = izquierda, j = medio + 1;
        while (i <= medio && j <= derecha) {
            if (inventario.get(i).getCodigoPostal() <= inventario.get(j).getCodigoPostal()) {
                temporal.add(inventario.get(i++));
            } else {
                temporal.add(inventario.get(j++));
            }
        }
        while (i <= medio) temporal.add(inventario.get(i++));
        while (j <= derecha) temporal.add(inventario.get(j++));
        for (int k = 0; k < temporal.size(); k++) {
            inventario.set(izquierda + k, temporal.get(k));
        }
    }

    //  FIFO: sale el PRIMERO en entrar (menor codigo postal)
    public Paquete despacharFIFO() {
        if (!inventario.isEmpty()) {
            return inventario.remove(0);
        }
        return null;
    }

    //  LIFO: sale el ULTIMO en entrar (mayor codigo postal)
    public Paquete despacharLIFO() {
        if (!inventario.isEmpty()) {
            return inventario.remove(inventario.size() - 1);
        }
        return null;
    }

    public static void main(String[] args) {
        CentroDistribucion1 centro = new CentroDistribucion1();
        Random random = new Random();

        System.out.println("Generando 1,000,000 paquetes...\n");
        for (int i = 0; i < 1000000; i++) {
            int cp = random.nextInt(50) + 110101;
            centro.recibirCajaCamion(new Paquete(i, cp));
        }

        System.out.println("Ordenando con MergeSort...");
        long inicio = System.currentTimeMillis();
        centro.ordenarRutaMergeSort();
        long fin = System.currentTimeMillis();
        System.out.println("Tiempo: " + ((fin - inicio) / 1000.0) + " s\n");

        // --- FIFO ---
        System.out.println("=== DESPACHO FIFO (sale el menor CP primero) ===");
        for (int i = 0; i < 5; i++) {
            Paquete p = centro.despacharFIFO();
            if (p != null)
                System.out.println("FIFO → ID: " + p.getId() + " | CP: " + p.getCodigoPostal());
        }

        System.out.println("\nPaquetes restantes tras 5 FIFO: " + centro.inventario.size());

        // --- LIFO ---
        System.out.println("\n=== DESPACHO LIFO (sale el mayor CP primero) ===");
        for (int i = 0; i < 5; i++) {
            Paquete p = centro.despacharLIFO();
            if (p != null)
                System.out.println("LIFO → ID: " + p.getId() + " | CP: " + p.getCodigoPostal());
        }

        System.out.println("\nPaquetes restantes tras 5 LIFO: " + centro.inventario.size());
    }
}