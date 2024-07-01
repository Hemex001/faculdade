import java.util.HashSet;
import java.util.Set;

/*
Exercício 1:
Adicionar e Remover Elementos
Escreva um programa Java que crie um HashSet de strings e adicione os elementos "apple", "banana", "orange" e "banana" (observe que "banana" é adicionado duas vezes).
Em seguida, remova o elemento "orange" e imprima o conjunto resultante.*/

public class Ex01 {
    public static void main(String[] args) {

        Set<String> conjunto = new HashSet<>();

        conjunto.add("apple");
        conjunto.add("banana");
        conjunto.add("orange");
        conjunto.add("banana");

        System.out.println("Conjunto: " + conjunto);

        conjunto.remove("orange");
        System.out.println("Conjunto após remover 'orange': " + conjunto);

    }
}
