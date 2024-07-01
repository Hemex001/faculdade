// Calculando a média das notas
//4- Criar uma nova classe chamada Tde01ex04 e definir um método main;
//a) solicitar ao usuário 4 notas (pode conter valores decimais);
//b) imprimir no console uma mensagem contendo a média das 4 notas informadas;

import java.util.Scanner;
public class Tde01ex04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a nota da primeira prova: ");
        float nota1 = scanner.nextFloat();
        System.out.println("Digite a nota da segunda prova: ");
        float nota2 = scanner.nextFloat();
        System.out.println("Digite a nota da terceira prova: ");
        float nota3 = scanner.nextFloat();
        System.out.println("Digite a nota da quarta prova: ");
        float nota4 = scanner.nextFloat();

        System.out.println("A média das notas informadas é: " + ((nota1+nota2+nota3+nota4)/4)) ;

    }
}
