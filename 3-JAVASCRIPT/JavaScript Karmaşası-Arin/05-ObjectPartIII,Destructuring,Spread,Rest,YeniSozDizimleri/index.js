// NEW OBJECT SYNTAX (Nesnelerle ilgili olan yeni sözdizimleri yazım kuralları)

//1- Shorthand Properties
    /* 
        bazen nesne Propertylerine ait olan isim ve değer birbirinin aynısı olur. Örnek;
        let names = "arin", age=5;
        const myObj = {
            names: names,
            age: age
        } 
        const myObj = { Şöyle de yazabiliriz.
            names,
            age
        }
        console.log(myObj.names);
        console.log(myObj.age); 
    */

//2- Computed Property Names
    //Bir nesneyi bir değişkenden gelen bir özellikle oluşturmak istersek böyle yapılıyor. Önce nesneyi boş bir şekilde oluşturuyoruz.
    //Sonra bu nesneye eklememiz gereken özelliği atıyoruz.
    /*ES5'de
        let prop1 = "name";
        let myObj = {};
        myObj[prop1] = "arin";
        console.log(myObj); //çıktı: {name: "arin"}  myObj nesnesine name Property'si yaptık.
    */
   /*ES6'da bir değişkenin property olarak atanabilmesi
        let prop1 = "name";
      let myObj = { 
          [prop1]: "arin2"
      }
      console.log(myObj);//çıktı {name: "arin2"}
   */
      

//3- Short Method Syntax
    /*
        const person = {
            name: "John",
            surname: "Doe",
            age: 40,
            fullName: function () {
                return this.name + " " + this.surname;
            }
        }
    */
    /*
        const person = {
                name: "John",
                surname: "Doe",
                age: 40,
                fullName() { //şeklinde kısa yazımıda var metod(fonksiyon)'ların
                    return this.name + " " + this.surname;
                }
            } 
    */    

//4- Object Destructuring (Nesne Parçalama) ! Önemli kısım burası
   // Bir nesnenin içindeki değerleri değişkenlere atamak için kullanılır.
/*
    /*eski usül:
        let myVar1 = person.name;
        let myVar2 = person.age;
    */

   /*yeni usül:
        const person = {
            name: "John",
            surname: "Doe",
            age: 40,
            fullName() { //şeklinde kısa yazımıda var metod(fonksiyon)'ların
                return this.name + " " + this.surname;
            }
        }
        let {name: myVar1, age: myVar2} = person;
        console.log(myVar1); //çıktı John
        console.log(myVar2); //çıktı 40  
    */

   /* Fakat genelde kullanım budur:
        const person = {
            name: "John",
            surname: "Doe",
            age: 40,
            fullName() { //şeklinde kısa yazımıda var metod(fonksiyon)'ların
                return this.name + " " + this.surname;
            }
        }
        // let {name: name, age: age} = person; // demek aslında alltaki
        let {name, age} = person; // özelliği değişken olarak atamak ister iken.
        console.log(name); //çıktı John
        console.log(age); //çıktı 40  
   */

  /* Örnek Kullanım
    const books = [
        {
            title: "Kitap1",
            author: "Yazar1",
            pageNum: "100",
        },
        {
            title: "Kitap2",
            author: "Yazar2",
            pageNum: "200",
        },
        {
            title: "Kitap3",
            author: "Yazar3",
            pageNum: "300",
        },
        {
            title: "Kitap4",
            author: "Yazar4",
            pageNum: "400",
        },
    ]

    const [{title, author}] = books;
    console.log(title); //çıktı Kitap1

    for (const {title, author} of books) {
        console.log(title +" "+ author ); //çıktı Kitap1 Yazar1 Kitap2 Yazar2 Kitap3 Yazar3 Kitap4 Yazar4
    }
*/

//5- Spread Operator in Object Literals(...) (Obje oluşturmada Spread Operator nedir? )

/* Spread'ı şu şekilde kullabiliriz. 
    1- var olan nesnenin özelliklerini kopyalamada veya
        const person = {
        name: "John",
        surname: "Doe",
        age: 40,
        fullName() { //şeklinde kısa yazımıda var metod(fonksiyon)'ların
            return this.name + " " + this.surname;
        }
    }
    const person2 = {...person}; //bu nesnenin özelliklerini kopyalamaya örnek
    console.log(person2); //çıktı {name: "John", surname: "Doe", age: 40, fullName: ƒ}
    --------------------------------------------------------------------------------------------------------------
    2- Nesneleri birleştirmede kullanabiliriz.
    const myObj1 = {
        name: "John", 
        surname: "Doe"
    }

    const myObj2 = {    
        age: 40,
        gender: 'male'
    }
    const myObj3 = {...myObj1, ...myObj2, school:"Celal Avşar İÖO"};
    console.log(myObj3); //çıktı {name: "John", surname: "Doe", age: 40, gender: "male", school: "Celal Avşar İÖO"}

*/

//6- Rest Operator in Object Literals 
    //Object Destructuring yöntemi ile kalan özellikleri başka bir nesne olarak çekebiliriz.??
    /* 
        const person = {
        names: "John",
        surname: "Doe",
        age: 40,
        fullName() { //şeklinde kısa yazımıda var metod(fonksiyon)'ların
            return this.name + " " + this.surname;
        }
    }
    const {surname, ...rest} = person;
    console.log(surname); //çıktı Doe
    console.log(rest); //çıktı {names: "John", age: 40, fullName: ƒ}  surname property yok.
    */
    

//7- Object Values - Object Entries
const person = {
    names: "John",
    surname: "Doe",
    age: 40,
    fullName() { //şeklinde kısa yazımıda var metod(fonksiyon)'ların
        return this.name + " " + this.surname;
    }
}

console.log(Object.keys(person)); //çıktı (4) ["names", "surname", "age", "fullName"]
console.log(Object.values(person)); //çıktı (4) ["John", "Doe", 40, ƒ]
console.log(Object.entries(person)); //çıktı (4) [Array(2), Array(2), Array(2), Array(2)]  --> 0: (2) ["names", "John"] , 1: (2) ["surname", "Doe"] gibi..