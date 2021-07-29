// FONKSİYONLAR

//HAtılamtma: shift + alt + a çoklu yorum yatırı yapmak.

/*1-Function Declaration ya da Function Statement deniyor.

function square (num){
    return (num*num);
}
console.log(square(4)); //() Invoke: çağırmak fonksionu çağırmak*/

/*//Function Declaration HOISTED gibi çalışır. Fakat Function Expression HOISTED gibi çalışmaz.
console.log(addition(1)); //çıktıyı 2 verir. HOISTED çalışır.

function addition(num) {
    return (num+num);
}

addition(4); // fonksiyonu çalıştırırken kullandığımız değişkenlere Arguman olarak isimlendiriyoruz.
*/

/*2-Function Expression Nedir? 
Function Declaration'ı bir değişkene atıyor isek Function Expression oluşturuyoruz demektir. func name is optionaldır.

const square = function (num){
    return (num*num);
}
console.log(square); // fonksiyonu yazdırır.
console.log(square(5)); //çıktı 25

//-Function Expression neden Function Declarationa göre neden daha çok kullanılır?
// değişkene yapılacabilecek şeylerin özelliğini aldığı için. Function Expression'daki değişken bizim için 
//bir FIRST - CLASS FUNCTIONS diyebiliyoruz. 
//Yani bir değişken ne yapabiliyor ise fonksiyonlarla da yapabiliriz. arrayda,object de kullanılabilir.

//Peki bizim fonksiyonu değişkene atayabilmemizin bize avantajı nedir?
const myArr = [6, "Arin", square]
console.log(myArr[2](4)); // çıktı 16

const myObj = {
    age:5,
    name: "salih",
    func: square(3),
    func1: function(){console.log("Object Element");} 

}

console.log(myObj.func); // 9 verdi.
myObj.func1(); // 45.satırdaki console.log("Object Element"); kodu çalıştırdı.

console.log(20 + (function() {return 10; })() ); // çıktısı 30 olur. Buna IIFE denir.

*/

//Fakat Function Expression HOISTED gibi çalışmaz. Peki neden?
/*
console.log(square);
const square = function (num){
    return (num*num);
}
*/

// 1-Function Expression is not HOISTED
// 2-Function Expression can be anonymous

/*
//First-Class Functions DEVAM
//Bir bir fonksiyonu başka bir fonksiyona argüman olarak alabiliriz. fonksiyonu çalıştırırken kullandığımız değişkenlere Arguman olarak isimlendiriyoruz.
const addFive = function (num, func){
    console.log(num+func());
}
addFive(10, function() {return 5;}) // çıktısı: 15 olur.
*/

/*
//Başka bir First-Class Functions özellik:
*-* Bir fonksiyonu başka bir fonsiyonun return ifadesinde de kullanabiliriz. Örnek;
const myFunc = function (num) {
    return function toDouble(num1) {
        console.log(num*num1);
    }
}
myFunc(10)(5); // 10 ile parametreyi verdik. ikinci ()parantez ile return içindeki fonsiyonu çağırdık. // çıktısı 10*5'den 50 olacak. 
*/

/* IIFE NEDIR?(Immediately Invocable Function Expression) dk 39'dan sonrası
Function Expression oluştuğunda bunun anında tek seferde çalışmasını istiyorsak anlamında. Peki buna neden ihityac duyarız.
örnek; sen sayfanda belirli işlemler yapmak istersen 

( function(){console.log(5 + 12);} )();

//sum();
//console.log(sum);


//oluşturuduğumuz anda çalıştırmak
*/

/* Diğer Önemli bilgi:
!!!! Js'deki hemen hemen herşey gibi Fonksiyonlar da birer "NESNE(OBJECT)"dir. Nesnelerin neyi olur property 

function square (num1, num2) {
    return (num1 * num2) ;
}
console.log(square.name); // çıktı square olur.
console.log(square.length); // çıktı 2 Burdaki length 2 çıkma sebebi parametre sayısına bağlıdır.

*/

