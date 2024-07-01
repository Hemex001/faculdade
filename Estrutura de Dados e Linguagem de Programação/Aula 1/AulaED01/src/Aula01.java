import java.util.Scanner;

public class Aula01 {

    /* Classe principal */
    public static void main(String[] args) {
        System.out.println("Hello World");

//        int num1 = 2;
//        int num2 = 2;
//        int soma = num1 + num2;
//        System.out.println("A soma dos números é: " + soma + "!!!");

        // declarando a variavel scanner para a entrada de dados
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String nome = scanner.next();

        System.out.println("Digite um numero: ");
        int num1 = scanner.nextInt();
        if (num1 <= 0) {
            System.out.println("Erro no cálculo. O número não pode ser menor que zero.");
        } else {
            System.out.println("Digite outro numero: ");
            int num2 = scanner.nextInt();

            if (num2 <= 0) {
                System.out.println("Erro no cálculo. O número não pode ser menor que zero.");
            } else {
                System.out.println("A soma dos números é: " + (num1 + num2) + "!!!");
            }
          }





    }


}
