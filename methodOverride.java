import java.util.*;

class Animal{
    String color;

    Animal(String color){
        this.color = color;
    }

    public String sound(){
        return "";
    };
}

class Dog extends Animal{
    Dog(String color){
        super(color);
    }

    @Override
    public String sound(){
        return "Bark";
    }
}

class Cat extends Animal{
    Cat(String color){
        super(color);
    }

    @Override
    public String sound(){
        return "Meow";
    }
}
public class methodOverride{
    public static void main(String[] args){

        Cat cat = new Cat("White");
        Dog dog = new Dog("Black");

        System.out.println("Cat sound: "+cat.sound());
        System.out.println("Dog sound: "+dog.sound());
    }
}