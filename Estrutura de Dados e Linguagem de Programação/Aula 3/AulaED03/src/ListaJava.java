public class ListaJava {

    private final int LIST_SIZE = 10;
    private int tamanho = 0;

    public Integer[] values = new Integer[LIST_SIZE];

    public void add(Integer value) {
        // TODO validar se a lista já atingiu o limite
        // TODO validar se o valor do objeto é maior que zero
        for (int i = 0; i < this.values.length; i++) {
            if (this.values[i] == null) {
                System.out.println("Adicionando o " + value);
                this.values[i] = value;
                tamanho++;
                break;
            }
        }

    }

    public Integer find(int index) {
        // TODO retorne o item pedido
        return null;
    }

    private void aumentarTamanho() {
        // TODO DESAFIO!! Descobrir uma maneira de aumentar o tamanho do array (substituir)
    }

    @Override
    public String toString() {
        // TODO Crie um método para imprimir
        return null;
    }
}
