# TYPESCRIPT NOTLARIM

=> Typescript dosyasını çalıştırmak için terminale tsc $dosya_adi komutunu yazmamız gerekiyor.
=> Array tanımlamanın 2 farklı yolu vardır. let numbers: number[] veya let boolValue = Array<boolean>
=> Eğer fonksiyon tanımlamarında option parametrelerini number2?: number şeklinde verebilirsin.
=> Eğer fonksiyonun döneceği değeri belirtmek istiyorsak <br>
function addNumbers(num1: number, num2?: number) : number {} <br>
şeklinde tanımlama yapabiliriz.
=> Eğer fonksiyon içerisinde default değer vermek istiyorsak <br>
function addNumbers(num1: number, num2?: number == 100) <br>
şeklinde yazabiliriz.   