// Basic class
class CoderX {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

// dry Way of Creating Class

class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected langs: string[] = ["C++"]
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.langs = langs;
  }

  public getAge() {
    return `${this.name} is ${this.age} years old`;
  }
  public getLangs() {
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
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLanguages() {
    // can access to langs field because it extends Coder class
    return `Can Write in ${this.langs.join("-")}`;
  }
  //   public getAge2() { cannot access to age because its private
  //     return `${this.age}`;
  //   }
}
const KreatorXoX = new WebDev("Windows", "Gorkem", "Country", 33);

console.log(KreatorXoX.getLanguages());
console.log(KreatorXoX.getAge());

//////////////////////////////////////////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
  stop: () => string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
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
  static count: number = 0; // static keyword applies field to the class not to the instance

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Marry = new Peeps("Marry");
const Dan = new Peeps("Dan");

console.log(Marry.id, Marry.name); // but there is no Marry.getCount();
//console.log(Peeps.getCount());
console.log(Peeps.count);

////////////////////////////////////////////////////////////
// Getters and Setters

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    // setting getter
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === "string")
    ) {
      this.dataState = value;
      return;
    } else throw new Error("Passed parameter is not only string array");
  }
}

const myBands = new Bands();
myBands.data = ["Led Zeppelin", "Neil Young"];
console.log(myBands.data);
myBands.data = [...myBands.data, "The Mountain Goats"];
console.log(myBands.data);
