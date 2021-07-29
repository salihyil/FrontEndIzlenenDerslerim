//JavaScript Karmaşası : 09 : ARROW Function - "OK Fonksiyonu"

/*  An arrow function expression is a compact alternative to a traditional function expression, 
    but is limited and can't be used in all situations.

    Differences & Limitations:

    -Does not have its own bindings to this or super, and should not be used as methods.
    -Does not have arguments, or new.target keywords.
    -Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    -Can not be used as constructors.
    -Can not use yield, within its body. 
*/
/* //Function Remembers
    //1- Function Declaration
    function square (num) {
        return num*num;
    }
    console.log(square(4));//çıktı 16

    //2- Function Expression //Hatırlatma square2() çalıştırırken fonksiyondan sonra çalışmak gerekiyordu.
    const square2 = function (num) {
        return num* num;
    };
    console.log(square2(5));//çıktı 25 
    //3-Arrow function expressions
    const square3 = (num) => {
        return num*num;     
    }
    console.log(square3(8));//çıktı 64
*/
/*  
    
*/

//Arrow function kullanmanın en temel sebebi this kavramı ile olan ilişkisinden kaynaklanır.    

/* person nesnesinde tellName Function declarations kısımda çıktı. this person referans eder.
    const person = {
        name: "Elis",
        tellName: function () {
            console.log(this);//çıktı {name: "Elis", tellName: ƒ}
            console.log(this.name);//çıktı Elis
        }
    }
    person.tellName(); 
*/

/* person nesnesinde tellName Arrow Functiondaki kısımda çıktı. this window'u referans eder.
    window.name = "arin"; 
    const person = {
        name: "Elis",
        tellName: () => {
            console.log(this);//çıktı Window {window: Window, self: Window, document: document, name: "", location: Location, …}
            console.log(this.name);//çıktı arin  window referans ettiği için
        }
    }
    person.tellName(); 

    //diğer örnek arrow fonksiyon
    const isimSoyle = () => {
    console.log(this);//çıktı Window {window: Window, self: Window, document: document, name: "arin", location: Location, …}
    }
    isimSoyle();
*/

/* 1- ARROW FONKSİYON KULLANMA SEBEBİ - 1    
    window.name = "window içindeki fatma";
    const person1 = {
        name:"person içindeki salih",
        tellName: function(){
            console.log(this);// {name: "person içindeki salih", tellName: ƒ, tellNameArrow: ƒ}
            console.log(this.name);//çıktı person içindeki salih

            //Arrow fonksiyon kendine ait this yoktur. Kendinden bir öncekine bakar. Bu örnekte function(){ bu neye bağlı ise bu arrow fonkda o olur.
            //function(){ burda person bağlı o yüzden setTimeout(()=>{ 'daki arrow fonkda person'a bağlı olacak. 
            setTimeout(() => {
                console.log(this);//çıktı {name: "person içindeki salih", tellName: ƒ, tellName1: ƒ}
                console.log(this.name);//çıktı person içindeki salih
            },2000)
        },
        tellName1: () => {
            console.log(this);//çıktı Window {window: Window, self: Window, document: document, name: "window içindeki fatma", location: Location, …}
            console.log(this.name);//çıktı window içindeki fatma
        }
    }
    //GENELDE BURDA ARROW FONKSİYONLARI setTimeout() GİBİ CALLBACK DENEN KISIMLARDA KULLANILIR.

    person1.tellName();
    person1.tellName1();

*/

/* 2- ARROW FONKSİYON KULLANMA SEBEBİ - 2   
   //Arrow fonksiyonu constructor fonksiyon olarak kullanamayız. Çünkü array fonksiyonların kendilerine ait this'i yoktur.

    const Person =  (name,surname) =>  {
    this.name=name;
    this.surname=surname
    }
    const arin = new Person("arin","çevik");
    console.log(arin);// index.js:104 Uncaught TypeError: Person is not a constructor Hatası alırsın.
*/

/* ** ARROW FONKSİYONU BÖYLE KULLANMAMALI 
    //Arrow fonksiyonu bir nesnenin direk methodu olarak kullanmak sakıncalıdır.

    window.year = 100;
    const myObj = {
    year: 2020,
    showYear1: function(){ 
        console.log(this.year, this);//çıktı 2020 {year: 2020, showYear1: ƒ, showYear2: ƒ}
    },
    showYear2: () => {console.log(this.year + " " + this);}//çıktı 100 [object Window]
    }
    myObj.showYear1();
    myObj.showYear2();
*/
/* *** ARROW FONKSİYONU BÖYLE KULLANMAMALI 
    //call, apply, bind js metodları ile  arrow fonksiyon ile kullanımı uygun değildir.
    
*/

window.name = "isim";
window.grade = "grade";

const student = {
    examResult1: function() { //Burayı arrow fonksiyona çevirirsek, arrow fonk'laron kendi this'leri yoktur. O yüzden burda window referans alacaktır. 
        return this.name + " " + this.grade;
    },
    examResult2: () => {
        return this.name + " " + this.grade;
    }

}
const student1 = {
    name: "arin",
    grade: 80,
}

const student2 = {
    name: "salih",
    grade: 70
}

console.log(student.examResult1.call(student1));//çıktı arin 80
console.log(student.examResult1.call(student2));//çıktı salih 70

console.log(student.examResult2.call(student1));//çıktı isim grade
