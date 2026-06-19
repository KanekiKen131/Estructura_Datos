    /*
    Author:Leonel Lima (LMess131)
    */
public class Paquete {
    int id;
    private int codigoPostal;

    public Paquete(int id, int codigoPostal) {
        this.id = id;
        this.codigoPostal = codigoPostal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(int codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
}