import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Aula06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> lista = new ArrayList<>();

        lista.add("String 1"); //posicao 0
        lista.add("String 2"); //posicao 1
        lista.add("String 3"); //posicao 2
        lista.add("String 4"); //posicao 3
        lista.add("String 5"); //posicao 4
        lista.add("String 6"); //posicao 5
        lista.add("String 6"); //posicao 6

        System.out.println("Digite a string que quer saber a posição: ");
        String value = scanner.nextLine();
        int indice = lista.indexOf(value);
        int ultimoIndice = lista.lastIndexOf(value);
        System.out.println("A posição da lista é " + indice);
        System.out.println("A ultima posição do item é " + ultimoIndice);

        String remove = lista.remove(ultimoIndice);
        System.out.println("Removeu " + remove);

        boolean removeu = lista.remove("String 6");
        System.out.println("Removeu? " + removeu);

        lista.remove("String 6");

        for (int i = 0; i < lista.size(); i++) {
            System.out.println(lista.get(i));
        }

        System.out.println("--------------------");
        //foreach
        for (String item : lista){
            System.out.println("Item da lista: " + item);
        }

        lista.clear();
        System.out.println("O tamanho da lista é: " + lista.size());


//        System.out.println(lista.get(32)); // Vai dar pau
    }
}
