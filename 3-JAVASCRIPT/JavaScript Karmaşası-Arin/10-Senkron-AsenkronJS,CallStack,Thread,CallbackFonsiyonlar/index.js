//10 : Senkron - Asenkron JS, Call Stack, Thread, Callback Fonsiyonlar

/*
    //JS Single Thread(Tek Konu)anlamı:  Bir process sırasında yapılan bir iş parçacığı anlamında Yani o anki çaışan kod parçacığı 
    //Synchronous(Senkron)  
    //Yani javascript Senkron ve Single Thread çalışır. Yani aynı anda yanlızca tek bir işlem yapar ve bu işlemleride sıralı bir şekilde yapar.
    //Peki neden Asenkron olarak çalıştırmak isteriz? Aynı anda birden fazla işlemi yapıyormuş yada yapıyormuş gibi görünmek ister.

*/
    /* const  func1 = () => {
        console.log("Func1 consolelog1");
        console.log("Func1 consolelog2");
        alert("Alert Message");    //Burda alert ok basmadan func2() çalışmıyor. sorunu gördük.
    }
    const func2 = () => {
        console.log("Func2 consolelog1");
        console.log("Func2 consolelog2");
    }
    func1();
    func2(); 
*/

/* 
    //Burada 1 sn eksik veri aldığımız zamandaki sorunu sekron sorununu görüyoruz. Bu sorunlarla karşılaşmamak için asenkronlara ihtiyaç duyarız.
    //Asenkron ile Aynı anda birden fazla işlem yapıyor gibi gözükmek isteriz.   
    //Js asekron çalışmalarda callback, promise, async await yapılarını kullanır.

    let x = 10;
    console.log("1. gelen veri", x);//çıktı 10

    setTimeout(()=>{
        x=x+5;
    },1000)

    console.log("2. gelen veri", x);//çıktı 10 //beklenen 15 fakat 1 sn geçikme sonucu yanlış gösterir.

    x=x+5;
    console.log("3. gelen veri", x);//çıktı 15
*/

/* 
    //Call Stack: Fonksiyonların çalışma sırasını gösterir.

    function func1 () {
        console.log("ben birinciyim");
        func2();
        console.log("ben tekrar birinciyim");
    }

    function func2 () {
        console.log("ben ikinciciyim");
        func3();
        console.log("ben tekrar ikinciciyim");
    }

    function func3 () {
        console.log("ben üçüncüyüm");
    }

    func1();
    // çıktı sırası: 1-ben birinciyim 2-ben ikinciciyim 3-ben üçüncüyüm 4-ben tekrar ikinciciyim 5-ben tekrar birinciyim

*/

/* 
    //Önce fonksiyonlar sonra callback olanlar çalışır burda callback olan setTimeout'dur.
    function task(message) {
        let n = 1000000000;
        while (n > 0) {
            n--
        }
        console.log(message);
    }

    console.log("1");

    setTimeout(()=>{
        console.log("2");
    },6000)

    console.log("3");
    console.log("4");
    task("İşlem tamamlandı.")

    setTimeout(()=>{
        console.log("5");
    },1000)

    setTimeout(()=>{
        console.log("6");
    },4000)
    //Çıktı sırası: 1 > 3 > 4 > İşlem tamamlandı. > 5  > 6  > 2
*/

/*  //Callback: Javascriptin asekton çalışma için bulduğu çözümlerden birisidir.
    //Asenkronik yapı içerisinde callback function kilit noktadır. Callback function başka bir fonksiyonun çalışmasını tamamladıktan sonra , bir başka fonksiyonun işlevini başlatır.
    //Bir fonksiyon başka bir fonksiyona argüman geliyorsa bu argüman olarak gelen fonsiyona "callback fonksiyon" denir.
    //Javascriptte callbacklerin en önemli kullanım şekilleri EventListener'dır.

    //ornek1
    const myName = () => {
        console.log("Benim adım arin");
    }
    setTimeout(myName, 3000);

    //ornek2
    setTimeout(() => {
        console.log("Benim adım arin");
    }, 3000) 

    //ornek3
    const books = [
        {name:"Kitap1", author:"Yazar1"},
        {name:"Kitap2", author:"Yazar2"},
        {name:"Kitap3", author:"Yazar3"}
    ];

    const listBooks = () => {
        books.map((book, index) => {
            console.log(book,index);
        })
    }

    const addNewBooks = (newBook, callback) => {
        books.push(newBook);
        callback(); //listBooks fonksiyonunu Callback olarak kullanıyoruz.
    }

    addNewBooks({name:"Kitap4", author:"Yazar4"}, listBooks);
    
*/
    
//Callback ile ilgili çıkan problemler
//Dk 1:02:12