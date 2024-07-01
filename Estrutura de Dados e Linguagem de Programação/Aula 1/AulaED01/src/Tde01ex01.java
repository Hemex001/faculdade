// Rotina de aumento de salário
//1- Criar uma nova classe chamada Tde01ex01 e definir um método main;
//a) dentro do main, criar uma rotina que pergunte o nome do usuário e, em seguida, o valor do salário;
//b) imprimir no console uma mensagem contendo o nome digitado pelo usuário e o valor do salário um aumento de 10%;

import java.util.Scanner;

public class Tde01ex01 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String nome = scanner.next();

        System.out.println("Digite seu salário: ");
        float salario = scanner.nextFloat();

        System.out.println("Olá " + nome + ", Seu salário com aumento de 10% é R$ " + (salario * 1.1) + ".");

    }

}
