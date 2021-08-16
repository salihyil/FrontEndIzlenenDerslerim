/* let a = Math.round(2.5); //rakamı yuvarlar yukarı veya aşağı 0-0.5 aşağı yuvarla, 0.5-1 yukarı yuvarlar.
console.log(a); */


/*void geriye değer döndürmeyen anlamında:
function Topla() {
    let dene = 5;
}
let b = Topla(); // b üzerine gelince et b: void olduğu yazar.*/

/* -Dom kısmında document kullanılıyor.
-en büyük alan global alan window  onun altında document filan filan var.*/

/*
console.log(parseInt(1.7)); //1
console.log(parseInt(1.1)); //1 */

/* let a = function deneme() {
    console.log("deneme");
}
console.log(typeof (a)); //function değeri döner.
type'lar composite: object ve function vardır.
7 tane primitive var: string, number, bigint, boolean, undefined, symbol, and null. */

/* IIFE fonksiyonu anında çağırma
let a = function () {
    console.log('Immediately Invoked Function Expression.');
}(); */


/* 01.11_Function: call fonksiyonu odaklanılan object'i değiştirebiliriz. context'i değiştirir.
 */


/*01.17 Closure kısmı  */


/* arrow fonk'da parametre almıyorsa başka türlü çağırımı?
let islem = (_ => console.log("arrow fonk'da _ kullanım."))();
*/



let yuvarlanmisSayi = Math.round(2.5); //round fonksiyonu dışardan değer alıp işlem yapıp geriye değer döndürür.
        console.log(yuvarlanmisSayi);

        let sayi = 1.1;

        //1.1+0.5 1.6    -->1
        //1.6 +0.5=2.4 -->

        let controlSayi = sayi + 0.5;
        let sonuc;
        console.log(controlSayi);