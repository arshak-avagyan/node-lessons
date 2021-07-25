abstract class Car{
    public name: string;

    public getDescription() : string{
        return `${this.name}`;
    };

    public abstract cost(): number;
}

abstract class CarOptions extends Car{
    decoratedCar: Car;
    color?: string; 
    public abstract getDescription(): string;
}

// ------------------------------ Cars ------------------------------
class Lexus extends Car{
    public name = "Lexus";

    public cost(): number {
        return 73000;
    }
}

// ------------------------------ Options ------------------------------
class HybridEngine extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return `${this.decoratedCar.getDescription()}, hybrid engine`;
    }

    public cost(): number {
        return this.decoratedCar.cost() + 10000;
    }
}

class TwoDoors extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return `${this.decoratedCar.getDescription()}, 2 doors`;
    }

    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class Color extends CarOptions {
    constructor(car: Car, color:string) {
        super();
        this.decoratedCar = car;
        this.color = color;
    }

    public getDescription(): string {
        return `${this.decoratedCar.getDescription()}, ${this.color} color`;
    }

    public cost(): number {
        return this.decoratedCar.cost() + 4000;
    }
}

// ------------------------------ Configure our Tesla! ------------------------------
let myLexus = new Lexus();
myLexus = new TwoDoors(myLexus);
myLexus = new HybridEngine(myLexus);
myLexus = new Color(myLexus, 'Red');

console.log(myLexus.cost());
console.log(myLexus.getDescription());
