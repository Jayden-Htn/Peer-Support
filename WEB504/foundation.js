// project stores basic information about a student and displays classes they are taking
// covers basic JavaScript concepts: variables, data types, functions, loops, arrays, objects, etc.


// lets store information about a student
// data types: string, number, boolean, array
// variable types: let, var, const
let name = "John";
var age = 25;
let local = true;
const joinDate = "16/09/2023";
let classes = ["WEB", "DAT", "SYD", "NET"];


// convert to object
const student_1 = {
    name: "John",
    age: 25,
    local: true,
    classes: ["WEB", "DAT", "SYD", "NET"] // array
};


// function in ES5
function displaySubjects(student) {
    // return a list of subjects
    let classes = student.classes;
    // alternate syntax
    // let classes = student["classes"];
    for (let i = 0; i < classes.length; i++) {
        // console.log("Class:", classes[i]);
        // now using a template literal
        console.log(`Class ${i+1}: ${classes[i]}`);
    }
}


// convert function to ES6 (newer)
const displaySubjectsES6 = (student) => {
    let classes = student.classes;
    for (let i = 0; i < classes.length; i++) {
        console.log(`Class ${i+1}: ${classes[i]}`);
    }
}


// call the functions
displaySubjects(student_1);
// displaySubjectsES6(student_1);


// next stuff
// do freecodecamp!!!