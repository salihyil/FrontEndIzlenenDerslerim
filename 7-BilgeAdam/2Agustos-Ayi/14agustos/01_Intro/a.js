let insan1 = {
    yas: 20,
    ad: "ahmet"
};
let insan2 = {
    yas: 20,
    ad: "mehmet"
};

insan1 = insan2;

insan1.ad = "veli";

console.log(insan1.yas == insan2.yas);