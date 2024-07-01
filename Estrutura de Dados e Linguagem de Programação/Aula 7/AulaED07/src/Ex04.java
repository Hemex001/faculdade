import java.util.HashSet;
import java.util.Set;

/*
Exercício 4: Verificar Tamanho e Limpar o Conjunto
Escreva um programa Java que crie um HashSet de números inteiros e adicione alguns valores.
Em seguida, verifique e imprima o tamanho do conjunto.
Por fim, limpe o conjunto e verifique novamente o tamanho, imprimindo o resultado.
*/

public class Ex04 {
    public static void main(String[] args) {

        Set<Integer> conjunto = new HashSet<>();

        conjunto.add(3);
        conjunto.add(24);
        conjunto.add(35);
        conjunto.add(84);
        conjunto.add(22);

        System.out.println("Tamanho do conjunto: " + conjunto.size());

        conjunto.clear();

        System.out.println("Tamanho do conjunto após ser limpo: " + conjunto.size());

    }
}
