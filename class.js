// lets make use of concepts of OOP
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = []; // A array for storing obj of student class
        this.teachers = []; // A array for storinf obj of Teacher class
        this.name = name;
    }
    School.prototype.addStudents = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeahers = function (tchObj) {
        this.teachers.push(tchObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var schoolOne = new School("Havard"); // Passing the argument to obj that is being created
var schoolTwo = new School("Cambridge"); // instance for class School
var studentOne = new Student("Holland", 23, schoolOne.name); // creating instances for class Student
var studentTwo = new Student("Matthew", 27, schoolOne.name);
var studentThree = new Student("Peter", 21, schoolTwo.name);
var teacherOne = new Teacher("Bill", 23, schoolOne.name); // creating insatances for class Teacher      
var teacherTwo = new Teacher("Donald", 39, schoolOne.name);
var teacherThree = new Teacher("Langdon", 45, schoolTwo.name);
schoolOne.addStudents(studentOne); // passing the obj of std class as an argument to addStudents method
schoolOne.addStudents(studentTwo);
schoolTwo.addStudents(studentThree);
schoolOne.addTeahers(teacherOne); // passing the obj of tch class as an argument to addTeachers method
schoolOne.addTeahers(teacherTwo);
schoolOne.addTeahers(teacherThree);
// lets print the output regarding school information on console
console.log(schoolOne);
console.log(schoolOne);
console.log(schoolTwo);
