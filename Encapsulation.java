import java.util.Scanner;

public class Encapsulation {
    public static void main(String[] args){

        String color = "Black";
        String model = "Toyota";
        int speed = 0;
        double fuelLevel = 10;

        Car car = new Car(color, model, speed, fuelLevel);


        System.out.println("Car color: "+color);
        car.accelerate();
        car.accelerate();

        System.out.println("Car speed: "+car.speed);
        System.out.println("Car fuel level: "+car.fuelLevel);

        car.brake();
        System.out.println("Car speed: "+speed);

    }    
}

class Car{
    String color;
    String model;
    int speed;
    double fuelLevel;

    Car(String color, String model, int speed, double fuelLevel){
        this.color = color;
        this.model = model;
        this.speed = speed;
        this.fuelLevel = fuelLevel;
    }

    public void accelerate(){
        if(fuelLevel <= 0){
            System.out.println("Fuel level is low");
            return;
        }
        speed += 10;
        fuelLevel -= 0.5;

        // System.out.println(speed);
    }
    public void brake(){
        speed = 0;
    }
}