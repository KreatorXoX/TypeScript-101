const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myStringValue: string = addOrConcat(3, 3, "concat") as string;
console.log(myStringValue);

let myNumValue: number = addOrConcat(3, 4, "add") as number;
console.log(myNumValue);

// carefull about type assertion eventhough function returns a string we
// cast it as if it is a number and there would be no errors.
myNumValue = addOrConcat(3, 3, "concat") as number;
