type Colors = 'red' | 'green' | 'blue';

type CustomColors = 'magenta' | 'cyan' | 'turquoise';

type AllColors = Colors | CustomColors;

const myColor: Colors = "blue";

const colorArray: (Colors | CustomColors)[] = ["red", "green", "blue", "cyan", "magenta", "turquoise"];

const allColors: AllColors[] = ["red","green", "blue", "red"];

type Person = {
    isim: string;
    soyisim: string;
    yas: number;
}

type Dog = {
    yas:number;
    cins: string;
    tur: string;
}

type DogPerson = Person & Dog;

const dogPerson: DogPerson = {
    isim: "Zeynep",
    soyisim: "Yılmaz",
    yas: 10,
    cins: "Golden",
    tur: "Husky",
}

const dogPerson1: DogPerson = {
    isim: "Mustafa",
    soyisim: "Oğuz",
    yas: 35,
    cins: "Köpek",
    tur: "Golden"
}

type PersonMap = Map<string, Person>;

const myMap: PersonMap = new Map();

myMap.set('kadir', {
    isim: 'Kadir',
    soyisim: 'Çalışkan',
    yas: 25
});

console.log(myMap);