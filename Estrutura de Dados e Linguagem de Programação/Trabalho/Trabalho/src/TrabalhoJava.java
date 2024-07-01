import java.time.LocalDate;
import java.util.*;

public class TrabalhoJava {

    public static void main(String[] args) {
/* ----------------------------------- */
/* Exercício 2 ----------------------- */
/* ----------------------------------- */
/*
        ArrayList<Aluno> listaAlunos = new ArrayList<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);

        listaAlunos.add(aluno1);
        listaAlunos.add(aluno2);
        listaAlunos.add(aluno3);

        for (Aluno aluno : listaAlunos) {
            System.out.println(aluno);
        }
*/

/* ----------------------------------- */
/* Exercício 3 ----------------------- */
/* ----------------------------------- */
/*
        ArrayList<Aluno> listaAlunos = new ArrayList<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);

        listaAlunos.add(aluno1);
        listaAlunos.add(aluno2);
        listaAlunos.add(aluno3);

        System.out.println("Antes da remoção:");
        for (Aluno aluno : listaAlunos) {
            System.out.println(aluno);
        }

        listaAlunos.remove(0);
        listaAlunos.remove(1);

        System.out.println("\nDepois da remoção:");
        for (Aluno aluno : listaAlunos) {
            System.out.println(aluno);
        }
*/

/* ----------------------------------- */
/* Exercício 5 ----------------------- */
/* ----------------------------------- */
/*
        Set<Aluno> conjuntoAlunos = new HashSet<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);
        Aluno aluno4 = new Aluno("Mark Zuckerberg", LocalDate.of(1989, 5, 2), 1);

        conjuntoAlunos.add(aluno1);
        conjuntoAlunos.add(aluno2);
        conjuntoAlunos.add(aluno3);
        conjuntoAlunos.add(aluno4);

        System.out.println("Alunos no HashSet:");
        for (Aluno aluno : conjuntoAlunos) {
            System.out.println(aluno);
        }
*/

/* ----------------------------------- */
/* Exercício 6 ----------------------- */
/* ----------------------------------- */
/*
        Set<Aluno> conjuntoAlunos1 = new HashSet<>();
        Set<Aluno> conjuntoAlunos2 = new HashSet<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);
        Aluno aluno4 = new Aluno("Mark Zuckerberg", LocalDate.of(1989, 5, 2), 2);

        conjuntoAlunos1.add(aluno1);
        conjuntoAlunos1.add(aluno2);
        conjuntoAlunos2.add(aluno3);
        conjuntoAlunos2.add(aluno4);

        conjuntoAlunos1.addAll(conjuntoAlunos2);

        System.out.println("Resultado da uni&atilde;o:");
        for (Aluno aluno : conjuntoAlunos1) {
            System.out.println(aluno);
        }
 */

/* ----------------------------------- */
/* Exercício 7 ----------------------- */
/* ----------------------------------- */
/*
        Queue<Aluno> filaAlunos = new LinkedList<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);
        Aluno aluno4 = new Aluno("Mark Zuckerberg", LocalDate.of(1989, 5, 2), 2);

        filaAlunos.add(aluno1);
        filaAlunos.add(aluno2);
        filaAlunos.add(aluno3);
        filaAlunos.add(aluno4);

        Aluno primeiroAluno = filaAlunos.poll();
        System.out.println("Primeiro aluno na fila: " + primeiroAluno.getNome());
 */


/* ----------------------------------- */
/* Exercício 8 ----------------------- */
/* ----------------------------------- */
/*
        Queue<Aluno> filaAlunos = new LinkedList<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);
        Aluno aluno4 = new Aluno("Mark Zuckerberg", LocalDate.of(1989, 5, 2), 2);

        filaAlunos.add(aluno1);
        filaAlunos.add(aluno2);
        filaAlunos.add(aluno3);
        filaAlunos.add(aluno4);

        Aluno ultimoAluno = null;
        for (Aluno aluno : filaAlunos) {
            ultimoAluno = aluno;
        }
        filaAlunos.remove(ultimoAluno);
        System.out.println("Nome do último aluno removido da fila: " + ultimoAluno.getNome());
 */

/* ----------------------------------- */
/* Exercício 9 ----------------------- */
/* ----------------------------------- */
/*
        Stack<Aluno> pilhaAlunos = new Stack<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);
        Aluno aluno4 = new Aluno("Mark Zuckerberg", LocalDate.of(1989, 5, 2), 2);

        pilhaAlunos.push(aluno1);
        pilhaAlunos.push(aluno2);
        pilhaAlunos.push(aluno3);
        pilhaAlunos.push(aluno4);

        Aluno primeiroAluno = pilhaAlunos.pop();
        System.out.println("Primeiro aluno na pilha: " + primeiroAluno.getNome());
 */

/* ----------------------------------- */
/* Exercício 10 ----------------------- */
/* ----------------------------------- */
/* */
        Stack<Aluno> pilhaAlunos = new Stack<>();

        Aluno aluno1 = new Aluno("Tony Stark", LocalDate.of(1996, 2, 2), 1);
        Aluno aluno2 = new Aluno("Bill Gates", LocalDate.of(1997, 7, 11), 2);
        Aluno aluno3 = new Aluno("Elon Musk", LocalDate.of(2000, 12, 10), 3);
        Aluno aluno4 = new Aluno("Mark Zuckerberg", LocalDate.of(1989, 5, 2), 2);

        pilhaAlunos.push(aluno1);
        pilhaAlunos.push(aluno2);
        pilhaAlunos.push(aluno3);
        pilhaAlunos.push(aluno4);

        Aluno primeiroAluno = pilhaAlunos.peek();
        System.out.println("Ultimo aluno na pilha: " + primeiroAluno.getNome());

    }
}
