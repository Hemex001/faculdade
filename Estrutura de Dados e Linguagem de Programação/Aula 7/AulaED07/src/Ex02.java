import java.util.HashSet;
import java.util.Set;

/*
Exercício 2: Verificar a Presença de Elementos
Escreva um programa Java que crie um HashSet de inteiros e adicione alguns números aleatórios.
Em seguida, verifique se o número 5 está presente no conjunto e imprima o resultado.
*/
public class Ex02 {
    public static void main(String[] args) {

        Set<Integer> conjunto = new HashSet<>();

        conjunto.add(1);
        conjunto.add(4);
        conjunto.add(9);
        conjunto.add(2);
        conjunto.add(22);
        conjunto.add(3);

        if(conjunto.contains(5)){
            System.out.println("O Conjunto contém o numero 5.");
            System.out.println(conjunto);
        } else {
            System.out.println("O Conjunto não contém o numero 5.");
            System.out.println(conjunto);
        }

    }
}
