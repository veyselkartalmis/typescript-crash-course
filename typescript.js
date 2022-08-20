// Dizi tanımlamak
var lang;
lang = ["TypeScript", "JavaScript", "C#", "Java"];
var numbers;
numbers = [1, 2, 3, 4, 5];
var boolValue;
boolValue = [true, false, false];
// Fonksiyon tanımlamak
function addNumbers(num1, num2) {
    if (typeof num2 === "undefined") {
        return num1;
    }
    return num1 + num2;
}
addNumbers(10, 21);
// Fonksiyonun tipini belirlemek
function addNumbers2(num1, num2) {
    console.log(num1 + num2);
    return;
}
// Classlarla çalışmak
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Created");
    }
    Person.prototype.showInfos = function () {
        console.log("Name: ".concat(this.name, " Age: ").concat(this.age, " Phone: ").concat(this.phone));
    };
    return Person;
}());
var person1 = new Person("Veysel Kartalmis", 23, "05379307038");
person1.showInfos();
