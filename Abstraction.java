import java.util.Scanner;

class Calculator{
    int a;
    int b;

    public int add(int a, int b){
        return a+b;
    }

    public int subtract(int a, int b){
        return a-b;
    }

    public int doubleIt(int a){
        return a<<1;
    }
}
public class Abstraction {
    public static void main(String[] args){

        int a = 10;
        int b = 20;

        Calculator calc = new Calculator();

        System.out.println("Addition: "+calc.add(a, b));
        System.out.println("DoubleIt: "+calc.doubleIt(a));
    }    
}
