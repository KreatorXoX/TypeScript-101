// Type Aliases
type Genre = string[];
type stringOrNumber = string | number;
type ISBN = stringOrNumber;

type Book = {
  name: string;
  genre: Genre;
  isAuthorAlive: boolean;
  numberOfCopies: number;
  isbn: ISBN;
};

// Literal Types
let role: "admin" | "employee" | "anonymous";
role = "employee";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage("Yip Yip");
logMessage(add(3, 4));

const subtract = function (c: number, d: number): number {
  return Math.abs(c - d);
};

logMessage(subtract(2, 9));

type mathFunction = (a: number, b: number) => number;
const multiply: mathFunction = (c, d) => {
  return c * d;
};

logMessage(multiply(3, 5));

// optional pparameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

const sumAll = (a: number = 15, b: number, c: number = 0): number => {
  return a + b + c;
};

logMessage(addAll(2, 4, 5));
logMessage(addAll(2, 5));
logMessage(sumAll(2, 5));
logMessage(sumAll(2, 5, 1));
logMessage(sumAll(undefined, 1));

// Rest parameters
const total = (a: number = 10, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMessage(total(1, 2, 3, 4));
logMessage(total(1, 2));
logMessage(total(undefined, 1, 2));

//never return type
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};
const infinite = () => {
  let i: number = 0;
  while (true) {
    i++;
  }
};

const isString = (value: any): boolean => {
  return typeof value === "string";
};
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};
// to satisfy the if condition we need an empty return but in ts
// we do it with returning a never type;
const stringOrNum = (value: string | number): string => {
  if (isNumber(value)) return "number";
  if (isString(value)) return "string";

  return infinite();
  // or
  return createError("Shouldnt execute this code");
};

console.log(stringOrNum("RocknRoll"));
console.log(stringOrNum(44));
