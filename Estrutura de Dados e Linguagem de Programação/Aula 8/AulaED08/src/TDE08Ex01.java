import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
/*
* Exercício 1: Manipulação de LocalDate
* Escreva um programa Java que utilize a classe LocalDate para obter e imprimir a data atual no formato "dd/MM/yyyy".
*/
public class TDE08Ex01 {
    public static void main(String[] args) {
        LocalDate dataInicio = LocalDate.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyy");
        String dataFormatada = dataInicio.format(formatter);
        System.out.println(dataFormatada);
    }
}
