import java.util.ArrayList;
import java.util.Random;

public class CentroDistribucion {
    private ArrayList<Paquete> inventario;

    public CentroDistribucion() {
        this.inventario = new ArrayList<>();
    }

    public void recibirCajaCamion(Paquete p) {
        this.inventario.add(p);
    }

    public Paquete despacharACliente() {
        if (!this.inventario.isEmpty()) {
            return this.inventario.remove(this.inventario.size() - 1);
        }
        return null;
    }

    public void ordenarRutaBurbuja() {
        int n = this.inventario.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (this.inventario.get(j).getCodigoPostal() > this.inventario.get(j + 1).getCodigoPostal()) {
                    Paquete temp = this.inventario.get(j);
                    this.inventario.set(j, this.inventario.get(j + 1));
                    this.inventario.set(j + 1, temp);

                }
            }
        }

    }

//    public static void main(String[] args) {
//        CentroDistribucion cd = new CentroDistribucion();
//        Random r = new Random(42);
//        System.out.println("Generar una semilla de 10000 paquetes con codigos postales para el almacen....");
//        for (int i = 0; i < 1000; i++) {
//            int cp = r.nextInt(50) + 110101;
//            cd.recibirCajaCamion(new Paquete(i,cp));
//        }
//
//        System.out.println("Ordenar paquetes por codigo postal usando el metodo de ordenamiento burbuja...");
//        long start = System.currentTimeMillis();
//        cd.ordenarRutaBurbuja();
//        long stop = System.currentTimeMillis();
//
//        double time = (stop - start) / 1000.0;
//        System.out.println("Tiempo de ordenamiento: " + time + " segundos");
//
//        System.out.println("Despachar los paquetes a los clientes...");
//
//        Paquete despachado = cd.despacharACliente();
//        if (despachado != null) {
//            System.out.println("Id entragado: " + despachado.getId());
//        }
//
//    }

    public static void main(String[] args) {

        // 1. Crear un arreglo de paquetes
        Paquete[] paquetes = {
                new Paquete(1, 110135),
                new Paquete(2, 110102),
                new Paquete(3, 110150),
                new Paquete(4, 110108),
                new Paquete(5, 110121)
        };

        //2. GestorRutas: ordenar el arreglo por codigo postal
        System.out.println("-- Antes de ordenar --");
        for (Paquete p : paquetes) {
            System.out.println("  ID: " + p.getId() + " , CP: " + p.getCodigoPostal());
        }

        GestorRutas.ordenar(paquetes);

        System.out.println("\n-- Después de ordenar  --");
        for (Paquete p : paquetes) {
            System.out.println("  ID: " + p.getId() + " , CP: " + p.getCodigoPostal());
        }

        //3. ColaPaquetes: FIFO
        System.out.println("\n-- ColaPaquetes (FIFO) --");
        ColaPaquetes cola = new ColaPaquetes(5);

        cola.enqueue(paquetes[0]);   // agrega paquete con CP menor (ya ordenado)
        cola.enqueue(paquetes[1]);
        cola.enqueue(paquetes[2]);

        System.out.println("Paquetes en cola: 3");

        Paquete saleFIFO1 = cola.dequeue();
        Paquete saleFIFO2 = cola.dequeue();

        if (saleFIFO1 != null)
            System.out.println("dequeue #1 → ID: " + saleFIFO1.getId() + " , CP: " + saleFIFO1.getCodigoPostal());
        if (saleFIFO2 != null)
            System.out.println("dequeue #2 → ID: " + saleFIFO2.getId() + " , CP: " + saleFIFO2.getCodigoPostal());

        //4. PilaPaquete: LIFO
        System.out.println("\n-- PilaPaquete (LIFO) --");
        PilaPaquete pila = new PilaPaquete(5);

        pila.push(paquetes[0]);   // push en orden ascendente
        pila.push(paquetes[1]);
        pila.push(paquetes[2]);

        System.out.println("Paquetes en pila: 3");

        Paquete saleLIFO1 = pila.pop();
        Paquete saleLIFO2 = pila.pop();

        if (saleLIFO1 != null)
            System.out.println("pop #1 → ID: " + saleLIFO1.getId() + " -- CP: " + saleLIFO1.getCodigoPostal());
        if (saleLIFO2 != null)
            System.out.println("pop #2 → ID: " + saleLIFO2.getId() + " -- CP: " + saleLIFO2.getCodigoPostal());
    }
}
//        cd.recibirCajaCamion(new Paquete(1, 12312));
//        cd.recibirCajaCamion(new Paquete(2, 12123));
//        cd.recibirCajaCamion(new Paquete(3, 12121));
//
//        System.out.println("Antes de ordenar:");
//        for (Paquete p : cd.inventario) {
//            System.out.println("ID: " + p.getId() + ", Codigo Postal: " + p.getCodigoPostal());
//        }
//
//        cd.ordenarRutaBurbuja();
//
//        System.out.println("\nDespues de ordenar:");
//        for (Paquete p : cd.inventario) {
//            System.out.println("ID: " + p.getId() + ", Codigo Postal: " + p.getCodigoPostal());
//        }
//    }

