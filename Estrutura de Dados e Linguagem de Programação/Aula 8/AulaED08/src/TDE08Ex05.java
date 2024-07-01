import java.util.HashMap;
import java.util.Map;

/*
Exercício 5: Iteração e Manipulação de HashMap
Escreva um programa Java que utilize um HashMap para armazenar o nome e o número de telefone de três contatos.
Em seguida, itere sobre o HashMap e imprima o nome e o número de telefone de cada contato.
 */
public class TDE08Ex05 {
    public static void main(String[] args) {
        Map<String, String> contatos = new HashMap<String, String>();

        contatos.put("Hemerson", "(44) 99732-7833");
        contatos.put("Leticia", "(44) 99966-1656");
        contatos.put("Maria", "(44) 99983-1691");

        for (Map.Entry<String, String> entry : contatos.entrySet()) {
            String nome = entry.getKey();
            String telefone = entry.getValue();
            System.out.println("Nome: " + nome + ", Telefone: " + telefone);
        }
    }
}
