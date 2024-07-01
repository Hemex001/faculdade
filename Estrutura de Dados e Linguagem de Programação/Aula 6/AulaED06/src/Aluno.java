import java.util.Date;
import java.util.List;

public class Aluno {
    // Atributos
    private String nome;
    private Date dataNascimento;
    private List<String> materias;

    // Construtores
    public Aluno() {
    }

    public Aluno(String nome, Date dataNascimento, List<String> materias) {
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

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public List<String> getMaterias() {
        return materias;
    }

    public void setMaterias(List<String> materias) {
        this.materias = materias;
    }

    // metodo para retornar as matérias de um aluno
    public String listarMaterias() {
        StringBuilder materiasString = new StringBuilder();
        for (String materia : materias) {
            materiasString.append(materia).append(" - ");
        }
        return materiasString.toString();
    }

    // metodo para adicionar materia
    public void adicionarMateria(String materia) {
        materias.add(materia);
    }

    // metodo para remover matéria
    public void removerMateria(String materia) {
        materias.remove(materia);
    }
}
