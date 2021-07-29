//OBJECT 2  - PART 2

/*
    //1-Prototype nedir?
    //JS'de hemen hemen tüm nesneler başka bir nesneden türetilerek oluşturulur. 
    //Biz yeni bir nesne oluşturduğumuz zaman bu nesne kendinden daha önceki nesne diyebileceğimiz yada onun ata(ancestor) nesnesi diyebileceğimiz bir nesneden türetilir.
    //Bu bir önceki nesneye de türetilen nesnenin Prototype'ı denir.

    const person = {
        name: "John",
        surname: "Doe",
        age: 40,
        languages: ["Turkish","English","Spanish"],
        fullName: function () {
            return this.name + " " + this.surname;
        },
        adress: {
            city: "Balıkesir",
            district: "Akçay"
        }
    }

    //console.log(person);
    //console.log(person.hasOwnProperty("name")); //true
    //console.log(person.toString()); //[object Object]

    //OBJECT + name, surname, age, fullName() -----> person // person'ın Prototype'ı OBJECT oluyor.
    const myObj = {};
    console.log(myObj); //{}
    console.log(myObj.toString()); //[object Object]

    //OBJECT ----> myObj // Yani myObj'da Prototype'ı OBJECT oluyor.
*/

/*
    function Person (name,surname,age) {

        this.name = name;
        this.surname = surname;
        this.age = age;
        this.fullName = function () {
            return this.name + " " + this.surname;
        }
    }
    const arin = new Person("Arin", "Çekiç", 6);
    console.log(arin);
    // OBJECT + name,surname,age,fullName() -----> Person -----> arin
    //Yani arin'in prototype'ı Person'dır. Person'ın prototype'ı OBJECT'dir.

    const elis = new Person("Elis","Çekiç",4);
    console.log(elis);
    elis.job = "Child";
    console.log(elis.toString);
    // OBJECT + name,surname,age,fullName() -----> Person + job -----> elis

*/

/*
    function Person (name, age) {
        this.name = name;
        this.age = age;
        
    }

    // Burda Person.prototype yazma sebebi; Her bir nesne için ortak nesneleri her seferinde çağırmamak için. Ortak kullanıclar çzellikler Person.prototype olarak tanımladık.
    Person.prototype.fullName = function () {
        return this.name + " " + this.surname;
    }
    Person.prototype.surname = "Çekiç";

    const elis = new Person("Elis",4);
    const arin = new Person("Arin",6);
    console.log(arin);
    console.log(elis);
    console.log(arin.fullName()); //Arin Çekiç
    console.log(elis.surname); //Çekiç

*/

/* 2-Inheritance: Bir nesnenin özelliğinin farklı nesneler tarafından kullanılabilmesine denir.
    //!!ES5 sürümü interitance kavramını prototype'ı inheritance olarak kullanıyor. Yani kendi özelliği veya metodu kendi prototype'ından alıyor.

    const person = {
            name: "XXXXX",
            surname: "XXXXX",
            age: 0,
            languages: ["Turkish","English","Spanish"],
            fullName: function () {
                return this.name + " " + this.surname;
            },
            adress: {
                city: "Balıkesir",
                district: "Akçay"
            }
    }
    const arin = Object.create(person);
    console.log(arin);
    console.log(arin.hasOwnProperty("name")); //false yazar. sadece arinde bakar.
    console.log("name" in arin);// true yazar. hepsine bakar 
*/

