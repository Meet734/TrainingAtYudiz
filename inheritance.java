import java.util.*;

public class inheritance{
    public static void main(String[] args){

        String name = "Tommy";
        int age = 3;
        String color = "Black";

        Dog dog = new Dog(name, age, color);

        System.out.print(name+" make sound like...");
        dog.makeSound();

        name = "Kitty";
        age = 2;
        color = "White";

        Cat cat = new Cat(name, age, color);

        System.out.print(name+" make sound like...");
        cat.makeSound();

    }
}

class Animal{
    String name;
    int age;
    String color;

    Animal(String name, int age, String color){
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public void makeSound(){};
}

class Dog extends Animal{
    Dog(String name, int age, String color){
        super(name, age, color);
    }

    public void makeSound(){
        System.out.println("Bark");
    }
}

class Cat extends Animal{
    Cat(String name, int age, String color){
        super(name, age, color);
    }

    public void makeSound(){
        System.out.println("Meow");
    }
}