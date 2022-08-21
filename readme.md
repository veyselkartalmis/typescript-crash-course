# TYPESCRIPT NOTLARIM

=> Typescript dosyasını çalıştırmak için terminale tsc $dosya_adi komutunu yazmamız gerekiyor. <br>
=> Array tanımlamanın 2 farklı yolu vardır. let numbers: number[] veya let boolValue = Array<boolean> <br>
=> Eğer fonksiyon tanımlamarında option parametrelerini number2?: number şeklinde verebilirsin. <br>
=> Eğer fonksiyonun döneceği değeri belirtmek istiyorsak <br>
function addNumbers(num1: number, num2?: number) : number {} <br>
şeklinde tanımlama yapabiliriz. <br>
=> Eğer fonksiyon içerisinde default değer vermek istiyorsak <br>
function addNumbers(num1: number, num2?: number == 100) <br>
şeklinde yazabiliriz. <br>
=> class oluşturduğumuzda içerisindeki nesnelere dışarıdan erişim istemiyorsak tanımlarken başına 'private' eklemek gerekiyor;<br>
```
class Person {
    name: string;
    private age: number; //age nesnesine dışarıdan artık ulaşılamayacak.
    phone: string;

    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;

        console.log("Created");
    }
}
```