// Index Signatures

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 40,
};

console.log(todaysTransactions.Books);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Job";

console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total: number = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));

/////////////////////////////////////////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  claases?: number[];
}

const studentObj: Student = {
  name: "Muh",
  GPA: 3.6,
  claases: [100, 120, 222],
};

console.log(studentObj.fartNoise);

for (const key in studentObj) {
  console.log(`${key} : ${studentObj[key]}`);
}

// without having index signature
//iterating through object keys

interface Studentz {
  name: string;
  GPA: number;
  claases?: number[];
}

const studentObj2: Studentz = {
  name: "Muh",
  GPA: 3.6,
  claases: [100, 120, 222],
};

// console.log(studentObj2.fartNoise); gives an error because that field doesnt exist
// when assigning signature indexes ts allows us to implement w/e property we want on the fly.

for (const key in studentObj2) {
  console.log(`${key} : ${studentObj2[key as keyof Studentz]}`);
}

Object.keys(studentObj2).map((key) => {
  console.log(studentObj2[key as keyof typeof studentObj2]);
});

const logStudentKey = (student: Studentz, key: keyof Studentz): void => {
  console.log(`${student.name} has ${key} : ${student[key]}`);
};

logStudentKey(studentObj2, "GPA");

///////////////////////////////////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// } instead of this.!!!

// making literal types keys but cannot access obj[key] in iterations
type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncome: Incomes = {
  salary: 14,
  bonus: "2x salary",
  sidehustle: "25",
};

for (const key in monthlyIncome) {
  console.log(monthlyIncome[key as keyof Incomes]);
}
