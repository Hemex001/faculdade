import java.util.HashSet;
import java.util.Set;

/*
Exercício 5: Verificar Unicidade de Elementos
Escreva um programa Java que crie um HashSet de strings e adicione os elementos "apple", "banana", "orange" e "banana".
Em seguida, verifique se o conjunto contém apenas elementos únicos (ou seja, nenhum elemento é repetido) e imprima o resultado.
*/

public class Ex05 {
    public static void main(String[] args) {

        Set<String> conjunto = new HashSet<>();

        conjunto.add("apple");
        conjunto.add("banana");
        conjunto.add("orange");
        conjunto.add("banana");

        boolean temRepetido = conjunto.size() != 4;

        if (temRepetido) {
            System.out.println("Tem elementos repetidos");
        } else {
            System.out.println("Não tem elementos repetidos");
        }
    }
}
