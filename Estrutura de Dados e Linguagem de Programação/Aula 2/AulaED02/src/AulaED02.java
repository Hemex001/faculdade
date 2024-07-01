import java.util.Scanner;

public class AulaED02 {


    public static void main(String[] args) {
        // Mostrando que a String  é um array de char
//        String curso = "TADS - terceiro período";
//
//        for (int i = 0; i < curso.length(); i++) {
//            System.out.println(curso.charAt(i));
//        }

        // Definindo um array / vetor
        int[] nota = new int[4];
//        nota[0] = 10;
//        nota[1] = 10;
//        nota[2] = 10;
//        nota[3] = 10;

        Scanner scanner = new Scanner(System.in);

//        for (int i = 0; i < 4; i++){
//            System.out.println("Digite a nota No " + i + 1);
//            nota[i] = scanner.nextInt();
//        }
//
//        for (int i = 0; i < 4; i++){
//            System.out.println("O valor do item " + i + " é " + nota[i]);
//        }

        // Trabalhando com matrizes  - array de 2 oiu mais dimensoes
        // sempre linha e coluna, nessa ordem
//        Declarando uma matriz
        int[][] matriz = new int[3][3];
//Percorrendo uma matriz
        int cont = 1;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++){
                matriz[i][j] = cont;
                cont++;
            }
        }
//Percorrendo uma matriz
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++){
                System.out.print(matriz[i][j]);
                System.out.print(", ");
                if (j == 2) {
                    System.out.println();
                }
            }
        }

    }

}
