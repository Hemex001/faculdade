import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {

// ***********************************************************************************************************
//        Ex 01 - Utilização de ArrayList (1,0 ponto):
//        Escreva um programa em Java que solicite ao usuário que insira uma lista de 5 nomes.
//        Em seguida, o programa deve armazenar esses nomes em um ArrayList e, finalmente, imprimir os nomes.
// ***********************************************************************************************************
/*
        Scanner scanner = new Scanner (System.in);
        ArrayList<String> nomes = new ArrayList<>();

        System.out.println("Insira 5 nomes: ");

        for (int i = 0; i < 5; i++){
            System.out.println("Insira o " + (i+1) + "o Nome: ");
            String nome = scanner.nextLine();
            nomes.add(nome);
        }

        System.out.println("\nOs nomes inseridos foram:");
        for (String nome : nomes) {
            System.out.println(nome);
        }
*/

// ***********************************************************************************************************
//        Ex 02 - Utilização de HashSet (2,0 pontos):
//        Primeiramente, na classe Pessoa implemente o método equals considerando apenas o atributo "codigo". Crie também o método toString() para facilitar a impressão do objeto.
//        Declare e instancie 4 objetos da classe Pessoa criada anteriormente.
//        Escreva um programa em Java que armazene os 4 objetos criados em um HashSet. Em seguida, o programa deve imprimir todos os objetos adicionados um em cada linha.
// ***********************************************************************************************************

        Pessoa pessoa1 = new Pessoa(1, "Mark Zuckerberg", LocalDate.of(1990, 5, 20));
        Pessoa pessoa2 = new Pessoa(2, "Elon Musk", LocalDate.of(1985, 10, 15));
        Pessoa pessoa3 = new Pessoa(3, "Alexandre de Moraes", LocalDate.of(2000, 3, 5));
        Pessoa pessoa4 = new Pessoa(4, "Dean Winchester", LocalDate.of(1995, 7, 30));

        HashSet<Pessoa> pessoas = new HashSet<>();

        pessoas.add(pessoa1);
        pessoas.add(pessoa2);
        pessoas.add(pessoa3);
        pessoas.add(pessoa4);

        for (Pessoa pessoa : pessoas) {
            System.out.println(pessoa);
        }

// ***********************************************************************************************************
//        Ex 03 - Utilização de HashMap (2,0 pontos):
//        Escreva um programa em Java que crie um HashMap onde a chave é o nome da pessoa (String) e o valor é um objeto Pessoa.
//        Insira nesse map os 4 objetos de Pessoa criados para o exercício anterior (se quiserem, podem criar novos objetos) e em seguida,
//        percorra o map imprimindo os objetos um em cada linha.
// ***********************************************************************************************************

        //Map<String, Pessoa> mapaPessoas = new HashMap<>(String, Pessoa);
        Map<String, Pessoa> mapaPessoas = new HashMap<>();

        mapaPessoas.put("Hemerson", pessoa1);
        mapaPessoas.put("Leticia", pessoa2);
        mapaPessoas.put("Maria", pessoa3);

        for (Map.Entry<String, Pessoa> entry : mapaPessoas.entrySet()) {
            String nome = entry.getKey();
            System.out.println("Nome: " + nome);
        }



// ***********************************************************************************************************
//        Ex 04 - Utilização de Queue (LinkedList) (2,0 pontos):
//        Escreva um programa em Java que simule uma fila de atendimento em um banco.
//        O programa deve permitir que os clientes entrem na fila (adicionando-os em uma LinkedList) e que sejam atendidos de acordo com a ordem de chegada (removendo-os da LinkedList).
//        Imprima o nome de cada cliente atendido.
// ***********************************************************************************************************



    }
}