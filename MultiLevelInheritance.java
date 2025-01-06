import java.util.Scanner;

class A {
    public void methodA(){
        System.out.println("Method A");
    }
}
class B extends A{
    public void methodB(){
        System.out.println("Method B");
    }
}
class C extends B{
    public void methodC(){
        System.out.println("Method C");
    }
}

public class MultiLevelInheritance {
    public static void main(String[] args){
        C c = new C();
        c.methodA();
        c.methodB();
        c.methodC();
    }
}
