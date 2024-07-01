import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/*
* Exercício 2: Manipulação de LocalDateTime
* Escreva um programa Java que utilize a classe LocalDateTime para obter e imprimir a data e hora atuais "dd/MM/yyyy HH:mm:ss".
*/
public class TDE08Ex02 {
    public static void main(String[] args) {

        LocalDateTime dataInicio = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyy HH:mm:ss");
        String dataFormatada = dataInicio.format(formatter);
        System.out.println(dataFormatada);
    }
}
