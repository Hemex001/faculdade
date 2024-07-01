import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
Exercício 4: HashMap com Objetos Personalizados
Modifique o programa anterior para usar um HashMap onde a chave é o nome da pessoa (String) e o valor é um objeto Aluno (utilize a classe Aluno que criamos no TDE 06).
Adicione três alunos ao HashMap e imprima o nome e a idade de cada pessoa (fazendo a conta da idade com o LocalDate).
 */
public class TDE08Ex04 {
    public static void main(String[] args) {

        Map<String, Aluno> pessoas = new HashMap<String, Aluno>();

        List<String> materiasJoao = new ArrayList<>();
        materiasJoao.add("Matemática");
        materiasJoao.add("Português");
        Aluno joao = new Aluno("João", LocalDate.of(1995, 5, 15), materiasJoao);

        List<String> materiasMaria = new ArrayList<>();
        materiasMaria.add("História");
        materiasMaria.add("Geografia");
        Aluno maria = new Aluno("Maria", LocalDate.of(1998, 9, 22), materiasMaria);

        List<String> materiasPedro = new ArrayList<>();
        materiasPedro.add("Física");
        materiasPedro.add("Química");
        Aluno pedro = new Aluno("Pedro", LocalDate.of(1997, 3, 10), materiasPedro);

        // Adicionando os alunos ao HashMap
        pessoas.put(joao.getNome(), joao);
        pessoas.put(maria.getNome(), maria);
        pessoas.put(pedro.getNome(), pedro);

        for (Map.Entry<String, Aluno> entry : pessoas.entrySet()) {
            String nome = entry.getKey();
            Aluno aluno = entry.getValue();
            int idade = LocalDate.now().getYear() - aluno.getDataNascimento().getYear();
            System.out.println("Nome: " + nome + ", Idade: " + idade);
        }

    }
}
