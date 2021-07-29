//JS Classes

//5 Constructor function

//CLASS DECLARATION //DERS2 bak HATIRLAMA
class Person {
    constructor (names, surname, age) {
        this.names =  names;
        this.surname = surname;
        this.age = age;
        this.friends = ["ela","rüzgar"]
    }
    fullName(){
        return this.names + " " + this.surname;
    }
}


//CLASS EXPRESSION //DERS2 bak HATIRLAMA
const Persons = class {
    constructor (names, surname, age) {
        this.names =  names;
        this.surname = surname;
        this.age = age;
        this.friends = ["ela","rüzgar"]
    }
    fullName(){
        return this.names + " " + this.surname;
    }
}


const arin = new Person("arin","çevik",4);
const elis = new Person("elis","çevik",3);

console.log(arin);//çıktı Person {names: "arin", surname: "çevik", age: 4, friends: Array(2)}
console.log(elis);//çıktı Person {names: "elis", surname: "çevik", age: 3, friends: Array(2)}
console.log(arin.fullName());//çıktı arin çevik
console.log(elis.fullName());//çıktı elis çevik
 
console.log(arin.friends);//çıktı (2) ["ela", "rüzgar"]
console.log(elis.friends);//çıktı (2) ["ela", "rüzgar"]
arin.friends.push("çınar");

console.log(arin.friends);//çıktı  (3)["ela", "rüzgar", "çınar"]
console.log(elis.friends);//çıktı (2)["ela", "rüzgar"]

//Javascript classlarının özel bir özel fonksiyon olduğu ispatı
console.log(typeof(Person)); //çıktı function