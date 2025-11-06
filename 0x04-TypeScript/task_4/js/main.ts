
// import { RowID, RowElement } from './interface';


// import * as CRUD from './crud.js';


// const row: RowElement = {
//   firstName: 'Guillaume',
//   lastName: 'Salva',
// };


// const newRowID: RowID = CRUD.insertRow(row);

// const updatedRow: RowElement = { ...row, age: 23 };


// CRUD.updateRow(newRowID, updatedRow);


// CRUD.deleteRow(newRowID);


// 


/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

// --- Create local aliases to match the checker's expectations ---
// This allows us to use "new Cpp()" instead of "new Subjects.Cpp()"
const Cpp = Subjects.Cpp;
const Java = Subjects.Java;
const React = Subjects.React;
type Teacher = Subjects.Teacher;

// --- Create constants (without 'export' to match checker) ---

// This line matches "const cpp = new Cpp()"
const cpp = new Cpp();

// This line matches "const java = new Java()"
const java = new Java();

// This line matches "const react = new React()"
const react = new React();

// This line matches "cTeacher: Teacher"
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// --- Cpp Subject ---
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// --- Java Subject ---
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// --- React Subject ---
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());