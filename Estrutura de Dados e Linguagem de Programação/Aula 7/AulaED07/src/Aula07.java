import java.util.HashSet;
import java.util.Set;

public class Aula07 {
    public static void main(String[] args) {

//        LocalDate data = LocalDate.now();
//        System.out.println(data);
//
//        LocalDateTime datahora = LocalDateTime.now();
//        System.out.println(datahora);
// https://dontpad.com/aulaivan/java


        Set<Integer> a = new HashSet<>();
        a.add(1);
        a.add(2);
        a.add(3);
        a.add(4);
        a.add(8);
        a.add(12);
        a.add(99);

        Set<Integer> b = new HashSet<>();
        b.add(3);
        b.add(7);
        b.add(8);
        b.add(9);
        b.add(14);
        b.add(0);

        System.out.println("Conjunto A: " + a);
        System.out.println("Conjunto B: " + b);

//        boolean b1 = a.addAll(b);
//        System.out.println("Union: " + a);

//        a.retainAll(b);
//        System.out.println("Intersection: " + a);

//        b.remove(14);
//        System.out.println("Conjunto B removido: " + b);

        a.removeAll(b);
        System.out.println("Difference: " + a);

    }
}
