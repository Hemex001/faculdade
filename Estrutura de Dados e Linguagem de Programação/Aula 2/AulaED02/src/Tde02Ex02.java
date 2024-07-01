public class Tde02Ex02 {

    public static void main(String[] args) {

        int matriz[][] = new int[3][3];

        int cont = 1;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                matriz[i][j] = cont;
                cont++;
            }
        }

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
