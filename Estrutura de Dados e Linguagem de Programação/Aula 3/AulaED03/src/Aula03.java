import java.util.Scanner;

public class Aula03 {

    public static void main(String[] args) {

        // Fila
        Scanner scanner = new Scanner(System.in);

        FilaJava fila = new FilaJava();
        System.out.println("Digite um valor: ");
//        fila.values[0] = scanner.nextLine();
        fila.add(scanner.nextLine());

//        System.out.println("Digite mais um valor: ");
//        String texto = scanner.nextLine();
//        if (texto.isEmpty()) {
//            fila.values[1] = texto;
//        } else {
//            System.out.println("Não inseriu o valor.");
//        }

    }
}
