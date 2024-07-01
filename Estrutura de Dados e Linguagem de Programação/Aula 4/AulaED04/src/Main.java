//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        int idade = 25;
        double altura = 1.75;
        boolean ehEstudante = true;
        String nome = "João";

        System.out.println("Idade: " + idade);
        System.out.println("Altura: " + altura);
        System.out.println("É estudante? " + ehEstudante);
        System.out.println("Nome: " + nome);

        Pessoa pessoa1 = new Pessoa("Maria", 30);
        pessoa1.imprimirDetalhes();

        Pessoa pessoa2 = new Pessoa("João", 25);
        pessoa2.imprimirDetalhes();
    }
}

