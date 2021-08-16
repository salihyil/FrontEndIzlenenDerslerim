
// https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11

/* 
!1)global anlamı: const,let: no   var: yes
*var ile yazınca a'ya tekrardan atama olur. Fakat let ile yazınca b'ye tekrardan atama yaparsan b tanımlıdır hata verir.
*/
var a = 5;
var a = 6;
console.log(a); //var b de 6 yazarken.

let b = 1;
//let b = 2;
console.log(b); // let b tanımlıdır hatası verir.

/*
!2)function-scope anlamı: const,let,var: yes
*/
let c = 5;
var v = 20;

(function names() {
    //let c = 10; //fonksiyon içinde let c tanımlanabilir ve fonksiyon dışındaki let c ve var v ulaşabilir.
    console.log(c); //5 yazar.

    //var v = 40;//fonksiyon içinde var v tanımlanabilir.
    console.log(v); //20 yazar.
})();

/*
!3)block-scope anlamı: const,let: yes  var: no
*
*/

function foo() {
    if (true) {
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope
    }
    console.log(fruit1); //block scope dışında var yine çalışır
    console.log(fruit2); //fakat burada const block scope dışında gözükmez.
    console.log(fruit3); //fakat burada elt block scope dışında dışında gözükmez.
}

foo();



console.log(square(5));
const square = function (x) { return (x * x); }

console.log(5 / 3);


let m = eval("{ foo: 123 }");
console.log(a);//123


let user = null;
if (user == undefined) {

    console.log("if içi: ", user);
}


let i = j = 1, k = 2;

if (i === j) {
    if (j === k) {
        console.log("i equals k");
    }
    else {
        console.log("i doesn't equal k");
    }
}
else {
    console.log("i doesn't equal j");
}
if (n === 1) {
    // Execute code block #1
} else if (n === 2) {
    // Execute code block #2
} else if (n === 3) {
    // Execute code block #3
} else {
    // If all else fails, execute block #4
}

let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

var sayac = 1;

while (sayac <= 5) {

    console.log(`sayımız: ${sayac}`)

    sayac++;

}


let id = 1; // Döngü kontrol değişkeni ilk değer atama

do {
    console.log(id++);
}
while (id <= 10);



/* 
let firma = ["a", "b", "c", "d"];

console.log(firma[firma.length - 1]); */



let i, j, sum = 0;
for (i = 0, j = 5; i < 4; i++, j--) {
    sum += i * j;
    console.log(sum);
}

// 0*5=0  sum: 0
// 1*4=4  sum: 4+0=4
// 2*3=6  sum: 4+6=10
// 3*2=6  sum: 10+6=16

const arr = [1, 2, 2, 4, 5];
const str = '12245'
const set = new Set([1, 1, 2, 4])
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
//for(let val of arr) console.log(val);
//for(let val of str) console.log(val);
//for(let val of set) console.log(val);
for (let val of map) console.log(val);

const me = { name: "hasan", age: 22, height: 180 };
for (let key in me) console.log(key + ":" + me[key]);


loop: for (let y = 0; y < 3; y++) {
    switch (y) {
        case 0:
            console.log(0)
            break;
        case 1:
            console.log(1)
            break loop;
        case 2:
            console.log(2)
            break;
    }
}



let a = 5;
let b = "5";
console.log(a == b);


let q = "10";
let w = 5;
console.log(q - w);  // çıktı 5 verir.
// Sadece + iken "105" değer dönerken  *, -, / ifadelerde number olarak görür stringi burada.



for (let id = 1; id <= 10; id++) {
    console.log(id);
    if (id == 5)
        break;
    console.log(8);
}

for (let counter = 0; counter <= 7; counter++) {
    if (counter == 5) continue;
    console.log(counter);
}



(function (x) {
    console.log(x *= 5);
})("5");








function test1() {
    return {
        name: "salih"
    }
}
function test2() {
    return
    {
        name: "salih"
    }
}
console.log(test1());
console.log(test2());




/* yield */

function* counter(value) {
    let step;

    while (true) {
        step = yield ++value;

        if (step) {
            value += step;
        }
    }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value);   // 1
console.log(generatorFunc.next().value);   // 2
console.log(generatorFunc.next().value);   // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value);   // 15
console.log(generatorFunc.next(10).value); // 26


function* gen() {
    "hello";
    yield "Javascript";
    let a = "Ecmascript6";
    yield 5;
    return "Generator Code";
}
for (let item of gen()) {
    console.log(item);
}





function* gen() {
    let x = yield "Hello";
    let y = yield "Javascript";
    let z = yield "Deneme";
    return x * y * z;
}
let newGen = gen();
newGen.next();
console.log(newGen.next(10));
console.log(newGen.next(5));
console.log(newGen.next(3));





/* throw */
try
{
    if(x < 0)
    {
        throw "HataMesaji1";
    }
    else if(x > 100)
    {
        
    }
}
catch(err)
{
    if(err=="HataMesaji1")
    {
        console.log("Değer 0 dan küçük");
    }
    if(err=="HataMesaji2")
    {
        console.log("Değer 100 den büyük");
    }
}

var HataMesaji1 = new Error();

HataMesaji1.name    = 'Negatif Değer';
HataMesaji1.message = 'Değer 0 dan büyük olmalı';

throw "HataMesaji1";