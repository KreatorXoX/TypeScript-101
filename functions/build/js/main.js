"use strict";
// Literal Types
let role;
role = "employee";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Yip Yip");
logMessage(add(3, 4));
const subtract = function (c, d) {
    return Math.abs(c - d);
};
logMessage(subtract(2, 9));
const multiply = (c, d) => {
    return c * d;
};
logMessage(multiply(3, 5));
// optional pparameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a = 15, b, c = 0) => {
    return a + b + c;
};
logMessage(addAll(2, 4, 5));
logMessage(addAll(2, 5));
logMessage(sumAll(2, 5));
logMessage(sumAll(2, 5, 1));
logMessage(sumAll(undefined, 1));
// Rest parameters
const total = (a = 10, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
logMessage(total(1, 2));
logMessage(total(undefined, 1, 2));
//never return type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 0;
    while (true) {
        i++;
    }
};
const isString = (value) => {
    return typeof value === "string";
};
const isNumber = (value) => {
    return typeof value === "number";
};
// to satisfy the if condition we need an empty return but in ts
// we do it with returning a never type;
const stringOrNum = (value) => {
    if (isNumber(value))
        return "number";
    if (isString(value))
        return "string";
    return infinite();
    // or
    return createError("Shouldnt execute this code");
};
console.log(stringOrNum("RocknRoll"));
console.log(stringOrNum(44));
