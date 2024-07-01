import java.util.Scanner;

public class Tde02Ex01 {

    public static void main(String[] args) {

        int numero[] = new int[5];

//        Scanner scanner = new Scanner(System.in);
        int cont = 5;
        for (int i = 0; i < 5; i++) {
            numero[i] = cont;
            cont++;
        }

        for (int i = 0; i < 5; i++) {
            System.out.println("O numero da posicao " + i + " do array é " + numero[i]);
        }

    }

}
