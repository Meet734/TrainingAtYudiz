import java.util.*;

interface interface1{
    void method1();
}
interface interface2{
    void method2();
}

class Temp implements interface1, interface2{
    public void method1(){
        System.out.println("Method1");
    }
    public void method2(){
        System.out.println("Method2");
    }
}

public class MultipleInheritance {
    public static void main(String[] args){
        Temp temp = new Temp();
        temp.method1();
        temp.method2();
        
    }
}
