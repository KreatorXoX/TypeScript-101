"use strict";
// Basic class
class CoderX {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// dry Way of Creating Class
class Coder {
    constructor(name, music, age, langs = ["C++"]) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.langs = langs;
        this.name = name;
        this.music = music;
        this.age = age;
        this.langs = langs;
    }
    getAge() {
        return `${this.name} is ${this.age} years old`;
    }
    getLangs() {
        return `${this.name} can work with ${this.langs.join(",")}`;
    }
}
const Kreator = new Coder("G_dev", "Rock", 33, ["Ts", "Js", "C#"]);
// Kreator.name = 'Olalal'; because we said its readonly, we can access the value but cannot change the value.
Kreator.music = "Grunge"; // music field is accessable and can be changed.
console.log(Kreator);
// console.log(Kreator.age) age is private you can't access this field.
// console.log(Kreator.langs) langs is protected you can't access this field.
console.log(Kreator.getAge()); // eventhough age is private we can access it using methods defined in Coder class
console.log(Kreator.getLangs());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLanguages() {
        // can access to langs field because it extends Coder class
        return `Can Write in ${this.langs.join("-")}`;
    }
}
const KreatorXoX = new WebDev("Windows", "Gorkem", "Country", 33);
console.log(KreatorXoX.getLanguages());
console.log(KreatorXoX.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
    stop() {
        return `Stopping W/E ${this.name} doing`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page);
console.log(Page.play("strums"));
console.log(Page.stop());
/////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; // static keyword applies field to the class not to the instance
const Marry = new Peeps("Marry");
const Dan = new Peeps("Dan");
console.log(Marry.id, Marry.name); // but there is no Marry.getCount();
//console.log(Peeps.getCount());
console.log(Peeps.count);
////////////////////////////////////////////////////////////
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        // setting getter
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((item) => typeof item === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Passed parameter is not only string array");
    }
}
const myBands = new Bands();
myBands.data = ["Led Zeppelin", "Neil Young"];
console.log(myBands.data);
myBands.data = [...myBands.data, "The Mountain Goats"];
console.log(myBands.data);
