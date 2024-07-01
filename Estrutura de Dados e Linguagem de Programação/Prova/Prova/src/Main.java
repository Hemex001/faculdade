import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Map;
import java.util.LinkedList;
import java.util.Queue;

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
/*
        System.out.println("\nHashSet: ");
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
*/
// ***********************************************************************************************************
//        Ex 03 - Utilização de HashMap (2,0 pontos):
//        Escreva um programa em Java que crie um HashMap onde a chave é o nome da pessoa (String) e o valor é um objeto Pessoa.
//        Insira nesse map os 4 objetos de Pessoa criados para o exercício anterior (se quiserem, podem criar novos objetos) e em seguida,
//        percorra o map imprimindo os objetos um em cada linha.
// ***********************************************************************************************************
/*
        System.out.println("\nHashMap: ");
        Map<String, Pessoa> map = new HashMap<String, Pessoa>();

        map.put(pessoa1.getNome(), pessoa1);
        map.put(pessoa2.getNome(), pessoa2);
        map.put(pessoa3.getNome(), pessoa3);
        map.put(pessoa4.getNome(), pessoa4);

        for (Map.Entry<String, Pessoa> entry : map.entrySet()) {
            System.out.println(entry.getValue());
        }
*/
// ***********************************************************************************************************
//        Ex 04 - Utilização de Queue (LinkedList) (2,0 pontos):
//        Escreva um programa em Java que simule uma fila de atendimento em um banco.
//        O programa deve permitir que os clientes entrem na fila (adicionando-os em uma LinkedList) e que sejam atendidos de acordo com a ordem de chegada (removendo-os da LinkedList).
//        Imprima o nome de cada cliente atendido.
// ***********************************************************************************************************
/*
        Queue<String> fila = new LinkedList<>();
        Scanner scanner = new Scanner(System.in);

        // adicionando clientes na fila
        fila.add("Mark Zuckerberg");
        fila.add("Elon Musk");
        fila.add("Alexandre de Moraes");
        fila.add("Dean Winchester");

        System.out.println("Clientes na fila: " + fila);

        // atendendo clientes
        System.out.println("\nAtendendo clientes: ");
        while (!fila.isEmpty()) {
            String clienteAtendido = fila.poll();
            System.out.println("Cliente atendido: " + clienteAtendido);
        }
*/
    }
}