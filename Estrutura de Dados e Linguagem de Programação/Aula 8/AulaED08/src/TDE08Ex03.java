import java.util.HashMap;
import java.util.Map;

/*
Exercício 3: HashMap com Tipos Primitivos
Crie um programa Java que utilize um HashMap para armazenar o nome e a idade de três pessoas. Em seguida, imprima o nome e a idade de cada pessoa.
 */
public class TDE08Ex03 {
    public static void main(String[] args) {

        Map<String, String> pessoas = new HashMap<String, String>();
        pessoas.put("Hemerson", "28");
        pessoas.put("Leticia", "27");
        pessoas.put("Maria", "55");

        for (Map.Entry<String, String> entry : pessoas.entrySet()) {
            String nome = entry.getKey();
            String idade = entry.getValue();
            System.out.println("Nome: " + nome + ", Idade: " + idade);
        }

    }
}
