let username: string = "Kreator";
let userName: string;

userName = "Brothz";
username = "KreatorXoX";

console.log(userName, username);

let age: number = 7;
let isWorking: boolean = true;
let creation: any;
let union: string | number;
union = "Opps";

creation = 12;
creation = "How";
creation = false;

console.log(age, isWorking, creation);

const sum = (a: number, b: number): number => {
  return a + b;
};

const concat = (a: string, b: string): string => {
  return a + b;
};

const concatWithNumber = (a: number, b: string): string => {
  return a + b;
};

console.log(sum(3, 4));
console.log(concat("Cat says", " meow"));
console.log(concatWithNumber(age, union));

let re: RegExp = /(?:^|\W)hi(?:$|\W)/;
console.log(re.test("does this include hi?"));
