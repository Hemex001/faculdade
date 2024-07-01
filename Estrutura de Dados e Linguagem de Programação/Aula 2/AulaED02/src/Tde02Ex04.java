import java.util.Scanner;
public class Tde02Ex04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite uma quantidade de degraus: ");
        int degraus = scanner.nextInt();

        for (int i = 0; i < degraus; i++) { // Percorre a quantidade de degraus

            //Preencher os espaços
            for (int j = 0; j <= degraus - i; j++) {
                System.out.print(" ");
            }

            for (int k = 0; k <= i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }
}
