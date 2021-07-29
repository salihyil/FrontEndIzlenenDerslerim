/* VAR - LET - CONST KARMAŞASI

let: block scope. değişen değişebilen ifadeler için
const: genelde değişmeyen değerler için kullanılır. constlarda başlangıç değeri verilmek zourunlu.

*/
let age = 40;
console.log(age);

age = 42;
console.log(age);

/*-------------------------------------
const name1 = "Arin";
console.log(name1);

name1 = "Elis"; 
console.log(name1); //Uncaught TypeError: Assignment to constant variable. hatası*/

// const mu let mi kullanmak ? const kullanmak daha çok istenir. Çünkü kazara let ile yazdığın değişkeni değiştirebilirsin.

/*-------------------------------------
//let değişmesini istediğimiz örnek olarak
let str = "";
for (let i = 0; i < 10; i++) {
    str = str.concat(i);
    console.log(str);
}*/


/*-------------------------------------
//const örnekler dizi ve classlar'da
const myArr = [1,2,3];
console.log(myArr);
myArr.pop();
console.log(myArr);

const student = {
    name: "Arin",
    age: 5
}
console.log(student);

Object.freeze(student);//student.name = "Salih"; gibi değer yazsakta değişim olmasını istemiyorsak bu kod.

student.name = "Salih";
console.log(student);

student = {
    name: "salih",
    age:5
}
//Böyle aynısından olarak kabul ederek hata verir. Fakat diğer yazımlar referans tip olduğu için yani yeni bir yerde kayıt oluyor gibi

*/

/*-------------------------------------
//var ile let farkı kullanım= 
var: functional scope / global scope olarak çalışır.
let: block scope

var x = 1;
console.log(x);
if (x == 1) {
    var x = 10; //çıktı 10
    console.log(x);
}
console.log(x); // çıktı 10
///////////////////////////////  
let y = 1;
console.log(y);
if (y == 1) {
    let y = 10; //çıktı 10
    console.log(y);
}
console.log(y); // çıktı 1
////////////////////////////////
var a = 1;
console.log(window.a); //global spoke çıktı 1 yazar iken let ile yazarsak 

let b = 1;
console.log(window.b); //let ile çıktı undefined yazar.

const c = 1;
console.log(window.c); //const ile çıktı undefined yazar.
*/

/*-------------------------------------
-HOISTING nedir?
Yukarı çekme , yükseltme anlamı vardır.

//var x; 

console.log(x); //çıktısı undefined olur. Bu olaya HOISTING denir. type hatası değilde undefined hatası olarak alıyoruz.
                     var x; gibi okuyor x'si
var x = 1;

//Fakat let ve const ile yazsak hata verir.
console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization hatası verir.
let y = 1;
*/

