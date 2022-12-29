let numArr: number[] = [12, 24, 21, 16, 22];
let strArr: string[] = ["12", "24", "21", "16", "22"];
let boolArr: boolean[] = [true, true, false, true];

let guitars = ["strat", "les paul", 5150];

let mixedData = ["evh", 1984, true];

guitars = [12, 23, 44];
guitars.push("Str");
guitars[0] = "Borth";
guitars.unshift(5150);
guitars[4] = 33;

console.log((mixedData = guitars));
// but we can't say guitars = mixedData because guitars array doesn't accept boolean type even if there is no boolean value assigned.
// mixedData = ["str", "les paul", 31];
// guitars = mixedData;

//Tuples
//are good for locked position locked type

let myTuple: [string, boolean, number] = ["EVH", true, 41];

let similarArr = ["marry", false, 21];

// myTuple = similarArr; gives an error because similarArr might be assigned with different values at any given time.

similarArr = myTuple; // works.

// myTuple[0]=false; gives an error because the first position has to be string
myTuple[2] = 33; // works.

//Objects
let myObj: object;

myObj = { id: 1, name: "Sith" };
console.log(myObj);

myObj = ["Sith", 1]; // arrays are object too;
console.log(myObj);

// initialization
myObj = [];
myObj = {};

const chess = {
  isEasyToLearn: true,
  recommendedAgeOfStart: 5,
  bestPlayer: "Magnus Carlsen",
  play: () => console.log("Started The Game"),
};

chess.recommendedAgeOfStart = 3;

chess.play();
chess.play = () => console.log("Making changes in play");
chess.play();

console.log(chess);

// specifying types to objects

type Book = {
  name: string;
  numberOfCopiesSold: number;
  isAuthorAlive: boolean;
  isbn: string | number;
  authorName?: string;
};

const Book1: Book = {
  name: "Catcher In The Rye",
  numberOfCopiesSold: 1233213213,
  isAuthorAlive: false,
  isbn: "Some ISBN number",
};

let Book2: Book;
Book2 = Book1;
Book2.authorName = "JD Salinger";

let Book3: Book = {
  name: "An Abundance of Katherines",
  numberOfCopiesSold: 123213214124,
  isAuthorAlive: true,
  isbn: 321323232,
};

const greetAuthor = (book: Book): string => {
  return `Hail To The ${book.authorName?.toUpperCase() || "Anonymous"}`;
};

console.log(greetAuthor(Book1));
console.log(greetAuthor(Book3));

interface Song {
  name: string;
  band: string;
  otherSongs?: (string | number)[];
  active: boolean;
  play(): string;
  soldCopies: number;
}

let Song1: Song = {
  name: "Devil in I",
  band: "slipknot",
  active: true,
  play: function () {
    return `${this.band} is now playing ${this.name}`;
  },
  soldCopies: 12000000,
};

console.log(Song1.play());

// if an optional field doesn't get initialized you can't push or do anything with it.
// it is going to be just undefined
Song1.otherSongs = [];
Song1.otherSongs?.push("Sulfur");
Song1.otherSongs?.push(666);

console.log(Song1);

// Enums

enum Grades {
  U = 1,
  D,
  C,
  B,
  A,
}

enum Grades2 {
  U = "unsatisfactory",
  D = "Below Average",
  C = "Average",
  B = "Good",
  A = "Great",
}

console.log(Grades["U"]);
console.log(Grades.U);
console.log(Grades[1]);

console.log(Grades2.U);
console.log(Grades2["U"]);
// console.log(Grades2["unsatisfactory"]); does not work there is no 2 way binding;
