var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Kalıtımla class oluşturmak
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfos = function () {
        _super.prototype.showInfos.call(this);
        console.log("Maaş: " + this.salary);
    };
    Employee.prototype.changeDepartment = function () {
        console.log("Departman değiştirildi ...");
    };
    return Employee;
}(Person));
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () {
        console.log("MySql Add");
    };
    MySql.prototype.get = function () {
        console.log("MySql Get");
    };
    MySql.prototype["delete"] = function () {
        console.log("MySql Delete");
    };
    MySql.prototype.update = function () {
        console.log("MySql Update");
    };
    return MySql;
}());
var Mongodb = /** @class */ (function () {
    function Mongodb() {
    }
    Mongodb.prototype.add = function () {
        console.log("MySql Add");
    };
    Mongodb.prototype.get = function () {
        console.log("MySql Get");
    };
    Mongodb.prototype["delete"] = function () {
        console.log("MySql Delete");
    };
    Mongodb.prototype.update = function () {
        console.log("MySql Update");
    };
    return Mongodb;
}());
function addDatabse(database) {
    database.add();
}
addDatabse(new MySql());
addDatabse(new Mongodb());
