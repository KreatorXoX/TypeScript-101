"use strict";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myStringValue = addOrConcat(3, 3, "concat");
console.log(myStringValue);
let myNumValue = addOrConcat(3, 4, "add");
console.log(myNumValue);
// carefull about type assertion eventhough function returns a string we
// cast it as if it is a number and there would be no errors.
myNumValue = addOrConcat(3, 3, "concat");
