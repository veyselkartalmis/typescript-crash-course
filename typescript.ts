// Dizi tanımlamak
let lang: string[];
lang = ["TypeScript", "JavaScript", "C#", "Java"];

let numbers: number[];
numbers = [1, 2, 3, 4, 5];

let boolValue: Array<boolean>;
boolValue = [true, false, false];

// Fonksiyon tanımlamak
function addNumbers(num1: number, num2?: number): number {
    if (typeof num2 === "undefined") {
        return num1;
    }

    return num1 + num2;
}

addNumbers(10, 21);

// Fonksiyonun tipini belirlemek
function addNumbers2(num1: number, num2: number): void {
    console.log(num1 + num2);
    return;
}

// Classlarla çalışmak
class Person {
    name: string;
    private age: number;
    phone: string;

    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;

        console.log("Created");
    }

    showInfos() {
        console.log(`Name: ${this.name} Age: ${this.age} Phone: ${this.phone}`)
    }
}

let person1 = new Person("Veysel Kartalmis", 23, "05379307038");
person1.showInfos();