import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Criando objetos Aluno
        List<String> materias1 = new ArrayList<>();
        materias1.add("Matemática");
        materias1.add("História");
        Aluno aluno1 = new Aluno("Hemerson", new Date(1996, 2, 2), materias1);

        List<String> materias2 = new ArrayList<>();
        materias2.add("Português");
        Aluno aluno2 = new Aluno("Leticia", new Date(1997, 7, 11), materias2);

        List<String> materias3 = new ArrayList<>();
        materias3.add("Ciências");
        materias3.add("Geografia");
        Aluno aluno3 = new Aluno("Carlos", new Date(2002, 3, 10), materias3);

        // imprime as materias dos alunos
        System.out.println("Matérias do aluno 1: " + aluno1.listarMaterias());
        System.out.println("Matérias do aluno 2: " + aluno2.listarMaterias());
        System.out.println("Matérias do aluno 3: " + aluno3.listarMaterias());

        // adiciona materias aos alunos
        aluno1.adicionarMateria("Física");
        aluno2.adicionarMateria("Química");
        aluno3.adicionarMateria("Biologia");

        // imprime materias do aluno apos adicionar materias
        System.out.println("Matérias do aluno 1 após adição: " + aluno1.listarMaterias());
        System.out.println("Matérias do aluno 2 após adição: " + aluno2.listarMaterias());
        System.out.println("Matérias do aluno 3 após adição: " + aluno3.listarMaterias());

        // remove materias dos alunos
        aluno1.removerMateria("História");
        aluno2.removerMateria("Português");
        aluno3.removerMateria("Geografia");

        // imprime as materias apos remocao
        System.out.println("Matérias do aluno 1 após remoção: " + aluno1.listarMaterias());
        System.out.println("Matérias do aluno 2 após remoção: " + aluno2.listarMaterias());
        System.out.println("Matérias do aluno 3 após remoção: " + aluno3.listarMaterias());
    }
}