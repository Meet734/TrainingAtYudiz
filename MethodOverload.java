import java.util.Scanner;

class MathOperation{

    public int add(int a, int b){
        return a+b;
    }
    public int add(int a, int b, int c){
        return a+b+c;
    }
}

public class MethodOverload {
    public static void main(String[] args){
        int a = 10, b = 20, c = 30;

        MathOperation math = new MathOperation();

        System.out.println("Addition of 2: "+math.add(a, b));
        System.out.println("Addition of 3: "+math.add(a, b, c));
    }
}
