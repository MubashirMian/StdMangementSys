// lets make use of concepts of OOP

class School{
    name:string;

    students : Student[]=[];  // A array for storing obj of student class
    teachers : Teacher[]=[];  // A array for storinf obj of Teacher class

    addStudents(stdObj : Student){  // method to get std obj then to push in students array
        this.students.push(stdObj);
    }

    addTeahers(tchObj  :Teacher){  // method to get teacher obj then push it into teachers array
        this.teachers.push(tchObj);
    }
    constructor(name:string){  // to initalize the value for name of the school
        this.name=name;
    }
}


class Student{
    name:string;
    age :number;
    schoolName:string;

    constructor(name:string, age :number,schoolName:string){  // intializing the attributes of class
        this.name=name; 
        this.age=age;
        this.schoolName=schoolName;
    }
}

class Teacher extends Student {  // make the class Student reusable and make use of it in Teacher class
}


let schoolOne = new School("Havard") // Passing the argument to obj that is being created
let schoolTwo = new School("Cambridge") // instance for class School

let studentOne =new Student("Holland",23,schoolOne.name) // creating instances for class Student
let studentTwo =new Student("Matthew",27,schoolOne.name)
let studentThree =new Student("Peter",21,schoolTwo.name)

let teacherOne=new Teacher("Bill",23,schoolOne.name) // creating insatances for class Teacher      
let teacherTwo=new Teacher("Donald",39,schoolOne.name)
let teacherThree=new Teacher("Langdon",45,schoolTwo.name)

schoolOne.addStudents(studentOne) // passing the obj of std class as an argument to addStudents method
schoolOne.addStudents(studentTwo )
schoolTwo.addStudents(studentThree)

schoolOne.addTeahers(teacherOne); // passing the obj of tch class as an argument to addTeachers method
schoolOne.addTeahers(teacherTwo);
schoolOne.addTeahers(teacherThree);

// lets print the output regarding school information on console

console.log(schoolOne);
console.log(schoolOne);
console.log(schoolTwo)