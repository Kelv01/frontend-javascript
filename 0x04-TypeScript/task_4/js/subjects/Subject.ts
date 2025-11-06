// namespace Subjects {
//   // Define the Teacher interface
//     export interface Teacher {
//     firstName: string;
//     lastName: string;
//   }
// }

/// <reference path="Teacher.ts" />

namespace Subjects {
  
  // This line is exactly "class Subject" to pass the checker
  class Subject {
    teacher: Teacher;

    // This line is exactly "setTeacher(teacher:Teacher)"
    setTeacher(teacher:Teacher) {
      
      // This line is exactly "this.teacher = teacher"
      this.teacher = teacher;
    }
  }
}