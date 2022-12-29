"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 40,
};
console.log(todaysTransactions.Books);
console.log(todaysTransactions["Pizza"]);
let prop = "Job";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const studentObj = {
    name: "Muh",
    GPA: 3.6,
    claases: [100, 120, 222],
};
console.log(studentObj.fartNoise);
for (const key in studentObj) {
    console.log(`${key} : ${studentObj[key]}`);
}
const studentObj2 = {
    name: "Muh",
    GPA: 3.6,
    claases: [100, 120, 222],
};
// console.log(studentObj2.fartNoise); gives an error because that field doesnt exist
// when assigning signature indexes ts allows us to implement w/e property we want on the fly.
for (const key in studentObj2) {
    console.log(`${key} : ${studentObj2[key]}`);
}
Object.keys(studentObj2).map((key) => {
    console.log(studentObj2[key]);
});
const logStudentKey = (student, key) => {
    console.log(`${student.name} has ${key} : ${student[key]}`);
};
logStudentKey(studentObj2, "GPA");
const monthlyIncome = {
    salary: 14,
    bonus: "2x salary",
    sidehustle: "25",
};
for (const key in monthlyIncome) {
    console.log(monthlyIncome[key]);
}
