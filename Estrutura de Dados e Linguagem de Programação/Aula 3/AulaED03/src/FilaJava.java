public class FilaJava {

    private String[] values;

    public FilaJava() {
        values = new String[5];
    }

    public void add(String valor) {
        for (int i = 0; i < values.length; i++) {
            if (values[i] == null) {
                values[i] = valor;
            }
        }
    }




}
