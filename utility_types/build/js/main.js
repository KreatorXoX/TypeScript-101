"use strict";
// Partial
const assignment1 = {
    stdId: "std1",
    title: "Math",
    grade: 90,
};
let updatedAssignment;
// making all the fields optional by using Partial keyword, only required field is stdId
// and its specified with Pick keyword
const updateAssignment = (assignmentToUpdate, propsToUpdate) => {
    const { stdId } = propsToUpdate;
    console.log("Id : ", stdId);
    return Object.assign(Object.assign({}, assignmentToUpdate), propsToUpdate);
};
updatedAssignment = updateAssignment(assignment1, { stdId: "std1", grade: 95 });
console.log(updatedAssignment);
// Required and Readonly
// making all the fields required by Required keyword
const saveAssignmentToDB = (assignment) => {
    console.log(assignment);
    // send it to DB logic
    return;
};
// saveAssignmentToDB(updatedAssignment); gives an error because verified field is needed
// eventhough verified property was optional
saveAssignmentToDB(Object.assign(Object.assign({}, updatedAssignment), { verified: false }));
const verifyAssignment = (assignment) => {
    return Object.assign(Object.assign({}, assignment), { verified: true });
};
const verifiedAssignment = verifyAssignment(updatedAssignment);
console.log(verifiedAssignment);
// verifiedAssignment.grade = 12; because the function returns a readonly Assignment
// this code will give an error.
// Record Type
const hexColorMap = {
    red: "FF0000",
    blue: "0000FF",
    12: "blue",
    true: "false",
    null: "undefined",
    undefined: "yellow",
};
const Paper = {
    Kelly: "A",
    Marry: "D",
};
const gradeData = {
    Kelly: {
        assignment1: 90,
        assignment2: 77,
    },
    Marry: {
        assignment1: 88,
        assignment2: 91,
    },
};
const score = {
    stdId: "std2",
    grade: 84,
};
const preview = {
    stdId: "std3",
    title: "CNG",
};
