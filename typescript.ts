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
    age: number;
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

// Kalıtımla class oluşturmak
class Employee extends Person {
    salary: number;

    constructor(name: string, age: number, phone: string, salary: number) {
        super(name, age, phone);
        this.salary = salary;
    }

    showInfos() {
        super.showInfos();
        console.log("Maaş: " + this.salary);
    }

    changeDepartment() {
        console.log("Departman değiştirildi ...");
    }
}

// let employee1 = new Employee("Veysel Kartalmis", 25, "05379307038", 1000);
// employee1.showInfos(); //miras aldığım için miras aldığım classın fonksiyonlarını da kullanabilirim
// employee1.changeDepartment();

interface IDatabase {
    add();
    get();
    delete();
    update();
}

class MySql implements IDatabase {
    add() {
        console.log("MySql Add");
    }

    get() {
        console.log("MySql Get");
    }

    delete() {
        console.log("MySql Delete");
    }

    update() {
        console.log("MySql Update");
    }
}

class Mongodb implements IDatabase {
    add() {
        console.log("MySql Add");
    }

    get() {
        console.log("MySql Get");
    }

    delete() {
        console.log("MySql Delete");
    }

    update() {
        console.log("MySql Update");
    }
}

function addDatabse(database: IDatabase) {
    database.add();
}

addDatabse(new MySql());
addDatabse(new Mongodb());

abstract class Database {
    get() {
        console.log("Database Get");
    }

    add() {
        console.log("Database Add");
    }

    abstract update();
    abstract delete();
}

class MySql2 extends Database {
    delete() {
        console.log("Database Delete");
    }

    update() {
        console.log("Database Update");
    }
}

class Mongodb2 extends Database {
    delete() {
        console.log("Database Delete");
    }

    update() {
        console.log("Database Update");
    }
}