import java.util.Scanner;

public class Tde02Ex03 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite uma string: ");
        String string = scanner.nextLine();

        int maiusculos = 0;
        int minusculos = 0;
        int digitos = 0;
        int especiais = 0;

        for (int i = 0; i < string.length(); i++) {
            char caractere = string.charAt(i);
            if (Character.isUpperCase(caractere)) {
                maiusculos++;
            } else if (Character.isLowerCase(caractere)) {
                minusculos++;
            } else if (Character.isDigit(caractere)) {
                digitos++;
            } else {
                especiais++;
            }
        }

        System.out.println("Numero de caracteres maiúsculos: " + maiusculos);
        System.out.println("Numero de caracteres minúsculos: " + minusculos);
        System.out.println("Numero de dígitos: " + digitos);
        System.out.println("Numero de caracteres especiais: " + especiais);
    }

}
