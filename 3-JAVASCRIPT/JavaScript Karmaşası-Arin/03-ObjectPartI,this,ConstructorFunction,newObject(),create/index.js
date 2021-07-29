// OBJECT 
//1-Object nedir? İsim ve değer(name-value) çiftlerinden oluşan birleşik veri tipidir.
//2- Burdaki person nesnesindeki name surname gibi isimlere "property" denir. Nesne ilişkili fonksiyonlara "method" deriz.
//3- this olduşturduğumuz nesnenin propertylerine gitmeyi sağlar.
//4- bir nesne propertylerin koleksiyonundan oluşur. colleciton of property
//5- Nesne neden kullanırız? Birbiri ile ilişkili verilerin bir arada bulanmasını isteriz. Tek tek verileri oluşmak mantıksız.


/*
    //1-Object Literal: yöntemi ile nesne oluşturma.
    //Gerçek hayattaki örneği bir formu dolduğumuz zaman biz girdiğimiz form elemanlarını nesne içerisinde toplayıp o nesneyi veri tabanında yazdırırız. 

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
    console.log(person);

    // "." dot Notation ile nesne elemanlarına ulaşabilirsin.
    console.log(person.name);
    console.log(person.fullName());

    //nesneye yeni property eklemek
    person.job = "student";
    console.log(person);

    // [] bracket Notation
    console.log(person['name']);
    console.log(person['fullName']());
*/

/*
    //2-js'deki nesne mantığını en iyi anlatan örnek: "Constructor(Yapıcı) Function" kullanarak js nesnesi oluşturmaktır. 
    //Constructor(Yapıcı) Function büyük harfle başlarlar. Constructor ile nesneleri daha hızlı oluşturabiliyoruz.

    function Person (name,surname,age) {

    console.log(this); //Burdaki this boş Person {} gösterir.

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname;
    }

    console.log(this); // Person {name: "fatma", surname: "yılmaz", age: 28, fullName: ƒ}
    }

    const person1 = new Person("salih","yılmaz",26); //ne wburda yeni bir boş nesne oluşturur. this'de person1'i referans verir.
    const person2 = new Person("fatma","yılmaz",28);
    console.log(person1.name); // çıktı salih
    console.log(person2.fullName());// çıktı fatma yılmaz

*/

/*
    //3-Object Constructor kullanarak başka bir fonksiyonda oluşturabiliriz. Object Constructor js'de olan bir build-in Constructor fonksiyonudur.
    //var Object: ObjectConstructor Provides functionality common to all JavaScript objects.(Tüm JavaScript nesneleri için ortak işlevsellik sağlar.)

    const person1 = new Object(); 
    person1.name = "John";
    person1.surname = "Doe";
    person1.age = 40;
    person1.fullName = function () {
    console.log(this); // this bulunduğu bloğun nesnesini referans alır. yani person1 burda
    return this.name + " " + this.surname; //person1.name + " " + person1.surname; yazıyor aslında
    }
    console.log(person1); //{name: "John", surname: "Doe", age: 40, fullName: ƒ}
    console.log(person1.age);
    console.log(person1.fullName());

*/

/*
    //JS'de nesne oluştururken kullanılan diğer yöntem: "create" metodudur.
    //4-Object.create() ile nesne oluşturmak:   


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

    const arin = Object.create(person);
    arin.name = "arin";
    arin.surname = "yazılım";

    console.log(arin); //çıktı: {name: "arin", surname: "yazılım"}
    console.log(arin.name); //çıktı: arin
    console.log(arin.age); //çıktı: 40  Değeri person nesnesinde aldı.
    console.log(arin.fullName()); //çıktı: arin yazılım 


*/
