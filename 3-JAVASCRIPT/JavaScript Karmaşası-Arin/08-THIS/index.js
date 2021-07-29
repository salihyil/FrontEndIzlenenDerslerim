//This Tanım: Bir fonksiyonun nasıl çağrıldığına bağlı olarak değişen söz konusu nesnedir.

//obj.func() ---> this obj
//this --> flobal object ---> window(global)


/* console.log(this); //çıktı Window {window: Window, self: Window, document: document, name: "", location: Location, …}
console.log(this.location); */

//Function Declaration
/* function func1() { //global nesneyi referans veriyor.
    this.name = "salih";
    console.log(this);
    console.log(this.age);//çıktı undefined verir. Function Expression HOISTING gibi çalışmaz.
} */

//Function Expression //Hatırlatma Function Expression HOISTED gibi çalışmaz. Dk 19:20 O yüzden değişken önceden tanımlı değilse undifined hatası alabilirsin.
/* const func2 = function() { //global nesneyi referans veriyor.
    this.age = 40;
    console.log(this);
    console.log(this.name);
}

func1();//çıktı Window {window: Window, self: Window, document: document, name: "", location: Location, …}
func2();//çıktı Window {window: Window, self: Window, document: document, name: "", location: Location, …} */

/* 
    const arin = {
        names: "arin",
        surname: "çevik",
        age: 4,
        fullName: function(){
            return this.names + " " + this.surname;
        },
        mother: {
            names: "gamze",
            surname: "çevik",
            age: 40,
            fullName: function() {
                return this.names + " " + this.surname;
            },
            fonk: ()=>{
                return this.names + " " + this.surname; 
            }
        }
    }

    console.log(arin.fullName()); //çıktı arin çevik this arini referans verir.
    console.log(arin.mother.fullName());//çıktı gamze çevik  this mother referans verir.
    console.log(arin.mother.fonk()); //Arrow function expressions: Does not have its own bindings to this or super, and should not be used as methods. 
*/

/* 
    //obj.func() ---> this obj  Yani this belirli nesnenin içinde ise onu referans veriyor.
    //this --> global object ---> window(global) Yani this global objectde ise window referans verir. //Örnek

    const elis = {
        name: 'Elis',
        funcy: function() {
            console.log(this === elis);//false
            console.log(this === window);//true
        }
    }

    elis.funcy();//çıktı console.log(this === elis);//true console.log(this === window);//false  Yani funcy() elise referans eder.

    const funcy2 = elis.funcy;
    funcy2();//çıktı console.log(this === elis);//false console.log(this === window);//true  Yani funcy2 global obf referans eder.  
*/

/*
//Kendi başına çalışan anonim fonksiyonun(burada setTmeout()) this'i window'a referans eder.


*/
const elis = {
    name: "Elis",
    funcy: function() {
        console.log(this === elis); //çıktı true
        setTimeout(function() {
            console.log(this === elis); //çıktı false 
            console.log(this === window);//çıktı true
        }, 2000)
    }
}

elis.funcy();
