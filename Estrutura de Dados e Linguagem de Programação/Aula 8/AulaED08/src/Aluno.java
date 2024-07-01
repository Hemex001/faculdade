import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Aluno {
    // Atributos
    private String nome;
    private LocalDate dataNascimento;
    private List<String> materias;

    // Construtores
    public Aluno() {
    }

    public Aluno(String nome, LocalDate dataNascimento, List<String> materias) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.materias = materias;
    }

    // Métodos getters e setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public List<String> getMaterias() {
        return materias;
    }

    public void setMaterias(List<String> materias) {
        this.materias = materias;
    }

    // método para retornar as matérias de um aluno
    public String listarMaterias() {
        StringBuilder materiasString = new StringBuilder();
        for (int i = 0; i < materias.size(); i++) {
            materiasString.append(materias.get(i));
            if (i < materias.size() - 1) {
                materiasString.append(" - ");
            }
        }
        return materiasString.toString();
    }

    // método para adicionar matéria
    public void adicionarMateria(String materia) {
        materias.add(materia);
    }

    // método para remover matéria
    public void removerMateria(String materia) {
        materias.remove(materia);
    }
}
