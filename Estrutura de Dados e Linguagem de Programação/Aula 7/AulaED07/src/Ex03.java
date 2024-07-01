import java.util.HashSet;
import java.util.Set;

/*
Exercício 3: Iteração e Impressão dos Elementos
Escreva um programa Java que crie um HashSet de caracteres e adicione algumas letras aleatórias.
Em seguida, itere sobre o conjunto e imprima cada caractere separadamente.
*/
public class Ex03 {
    public static void main(String[] args) {

        Set<Character> conjunto = new HashSet<>();

        conjunto.add('a');
        conjunto.add('b');
        conjunto.add('c');
        conjunto.add('d');
        conjunto.add('e');

        System.out.println("Caracteres do conjunto: ");
        for (char letra : conjunto) {
            System.out.println(letra);
        }
    }
}
