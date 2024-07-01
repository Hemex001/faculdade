//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Carro carro1 = new Carro("Chevrolet", "Onix", 2020, 89900);
        carro1.mostrarInformacoes();
        carro1.aplicarDesconto(29900);
        System.out.println("---------------- Após o desconto: ");
        carro1.mostrarInformacoes();

    }
}
