let a = 5;
var b = 3;

function deneme() { /* fonksiyon scope: const, let, var: yes  */
    console.log(a);
    console.log(b);
    let c = 4;
    var d = 6;
}
deneme();

/* console.log(c); // c tanımlı değil dedi.
console.log(d); // d tanımlı değil dedi. */

if (1 == 1) {
    var vardeneme = 4;
    let letdeneme = 5;
}

console.log("vardeneme:", vardeneme);
console.log("letdeneme", letdeneme);

/* "use strict" kullanılırsa ab tanımsız olduğunu söyler.
ab = "sa";
console.log(ab); */


/*
let sayi = 90;
let sayi1 = 90;
console.log(sayi++); //90
console.log(sayi);//91

console.log(++sayi1);//91
console.log(sayi1);//91
*/

let a = {
    deger: "a"
}
let b = {
    deger: "b"
}

console.log(a || b); //{ deger: 'a' } yazdırdı.



if (true) {
    // "if" block scope
    var count = 5;
    console.log(count); // 5
}
console.log(count); // 5


if (true) {
    // "if" block scope
    let counts = 5;
    console.log(counts); // 5
}
console.log(counts); // 5