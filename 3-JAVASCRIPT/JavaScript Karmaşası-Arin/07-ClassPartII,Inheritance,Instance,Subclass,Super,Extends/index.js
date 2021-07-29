//07 : Class Part II, Inheritance, Instance, Subclass, Super, Extends

/* //CLASS DECLARATION 
class Person {
    constructor (names, surname, age) {
        this.names =  names;
        this.surname = surname;
        this.age = age;
        this.friends = ["ela","rüzgar"]
    }
    fullName(){ //fullName burada __proto__(prototype) içinde durur. Bu bütün nesneler için ortaktır.
        return this.names + " " + this.surname;
    }   
    static showName = "Person class'a ait static veri.";
    static staMetod (){
        console.log("Static metod çalışıyor.");
    }   
}
console.log(typeof(Person)); //çıktı function


const arin = new Person("arin","cevik",5,);// arine Person'nın instance'sı deniyor. Bu tümüne işleme instanced denir.
//bakalım doğrumu
console.log(arin instanceof Person);//çıktı true verir.
console.log(arin);

//Belli metodların yada özelliklerin yanlızca ona !!"class"'a ait olması istendiğinde bunlara "static" metod veya özellik denir.
console.log(arin.showName);//çıktı undefined 
console.log(Person.showName);//çıktı Person class'a ait static veri.  */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Person {
    constructor (names, surname, age) {
        this.names =  names;
        this.surname = surname;
        this.age = age;
        this.friends = ["ela","rüzgar"]
    }
    fullName(){ //fullName burada __proto__(prototype) içinde durur. Bu bütün nesneler için ortaktır.
        return this.names + " " + this.surname;
    } 
}

/* function Person (name,surname,age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname;
    }
} */

/* //Bu yukarıdaki function Person ve class Person ikisi ilede aynı şeyi oluşturuyoruz. Benim neden class diye birşeye ihtiyacımız var? Dk 19 gibi
//cevap: Class'lar nesnelerin bir şablonu görevi görür. En önemli kullanma sebebi budur. Tek seferde değilde parça parça yapmak daha kolaylaştır.

//Javascripte Inheritance(miras) ne anlama gelir?
//Engineer class oluşturduk bu class'ında Person classına ait tüm özellikleri ve metodları içeriyorsa Inheritance(miras) işe yarar.

class Engineer extends Person{};

const gurcan = new Engineer("Gürcan", "Çekiç", 40); //Engineer Subclass(child)  Person -> Superclass(parent) diye adlanır.
console.log(gurcan); //çıktı Engineer {names: "Gürcan", surname: "Çekiç", age: 40, friends: Array(2)} */

class Engineer extends Person{
    constructor (name, surname, age, job) {
        super(name, surname, age); // yani name, surname, age'leri Persondan değerleri.
        this.job = job;
    }
    getMoney() {
        console.log("Para Kazan");
    }
}

const gurcan = new Engineer ("arin", "Çekiç", 3, "engineer");
console.log(gurcan);//çıktı Engineer {names: "arin", surname: "Çekiç", age: 3, friends: Array(2), job: "engineer"} 
console.log(gurcan.fullName()); //çıktı arin Çekiç

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ExtendedArray extends Array {
    shuffle(){
        this.sort(()=> Math.random() - 0.5)
    }
}

let myArr = new ExtendedArray (1,2,3,4,5);
console.log(myArr instanceof ExtendedArray); //true
console.log(myArr instanceof Array); //true4
console.log(myArr);
myArr.shuffle();
console.log(myArr);//Her seferinde dizi içindeki rakamların yerleri değişecek.