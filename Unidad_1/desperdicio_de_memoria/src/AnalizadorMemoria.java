/*
Autor: Leonel Lima (LMess)
Fase 2
 */
public class AnalizadorMemoria {

    private long memoriaInicial;
    private long memoriaFinal;

    public void iniciarMedicion() {
        System.gc();
        memoriaInicial = obtenerMemoriaActual();
    }

    public void finalizarMedicion() {
        memoriaFinal = obtenerMemoriaActual();
    }

    private long obtenerMemoriaActual() {
        Runtime runtime = Runtime.getRuntime();
        return runtime.totalMemory() - runtime.freeMemory();
    }

    public long obtenerMemoriaConsumida() {
        return memoriaFinal - memoriaInicial;
    }

    public double calcularPorcentajeDesperdicio(long memoriaIdeal) {
        return ((double)(obtenerMemoriaConsumida() - memoriaIdeal) / obtenerMemoriaConsumida()) * 100;
    }
}