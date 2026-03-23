//Object
const validCourses = [
    "BA Food Appreciation",
    "BA Applied Poetry of the Future",
    "BS Computer Repair Shop",
    "BS Video Gaming",
    "BS Installing and Downloading"
];

class Student {

    constructor(studentName,age,email,course){
        this.studentNumber = this.generateStudentNumber()
        this.studentName = studentName
        this.age = age
        this.email = email
        this.course = course

        this.validateStudent()
    }

    generateStudentNumber(){
        const additionalNumbers = new Set();

        while (additionalNumbers.size < 5){
            let digit = Math.floor(Math.random() * 10)
            additionalNumbers.add(digit)
        }
        
        return('2024' + [...additionalNumbers].join(""))
    }



    validateStudent(){
        if(!this.isValidName()){
            throw new Error("Not valid Name")
        }
        if(!this.isValidAge()){
            throw new Error("Not valid Age")
        }

        if(!this.isValidEmail()){
            throw new Error("Not valid Email")
        }
        if(!this.isValidCourse()){
            throw new Error("Not valid course")
        }
    }


    isValidName(){
        const regexPattern = /^[A-Za-z]+(?: [A-Za-z]+)?$/     //Regex Pattern from a to Z with one space can allow -
        return regexPattern.test(this.studentName) && this.studentName.length >= 5;
    }

    isValidEmail(){
        const regexPattern = /^[^\s@]+@up\.edu\.ph$/
        return regexPattern.test(this.email)
    }

    isValidAge(){
        if(this.age > 18 && this.age < 99){
            return true
        }
        return false
    }
    
    isValidCourse(){
        return validCourses.includes(this.course)
    }

}



//Date
function time_now(){
    const today = new Date()
    
    const DateOptions = {
        year: 'numeric',    // Numeric -> Digits
        month: 'long',       //long form text
        day: 'numeric'
    };

    const DayOptions = {
        weekday: 'long'
    }

    const timeNowOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }

    
    const DateToday = today.toLocaleDateString("en-US",DateOptions)
    const DayToday = today.toLocaleDateString("en-US",DayOptions)
    const timeNow = today.toLocaleString("en-US",timeNowOptions)

    




    document.getElementById("dateToday").textContent = `Today is ${DateToday}, ${DayToday}.`;
    document.getElementById("timeNow").textContent = `The current time is ${timeNow}.`

}

//Here put all students 
const Students = []



function addStudents(event){
    event.preventDefault();

    const studentName = document.getElementById("name").value
    const studentAge = document.getElementById("age").value
    const studentEmail = document.getElementById("email").value
    const studentCourse = document.getElementById("course").value


    const student = new Student(studentName,studentAge,studentEmail,studentCourse)

    Students.push(student)
    console.log(student.studentNumber)

}


function find_student(){

    const studentIDInput = document.getElementById("studentIdInput").value.trim()
    const studentResult = document.getElementById("studentResult")


    const foundStudent = Students.find(student => student.studentNumber === studentIDInput)

    
    if(!foundStudent){
        studentResult.textContent = "Student record does not exist"
        return
    }

    studentResult.textContent = `${foundStudent.studentNumber},${foundStudent.studentName},${foundStudent.age},${foundStudent.email},${foundStudent.course}`

}


function display_list(){
    const displayAll = document.getElementById("displayAll")

    if (Students.length === 0) {
        displayAll.innerHTML = `<p class="empty-message">No student records available yet.</p>`
        return
    }

    displayAll.innerHTML = Students.map((student, index) => `
        <div class="student-card">
            <h3>Student ${index + 1}</h3>
            <p><span>ID:</span> ${student.studentNumber}</p>
            <p><span>Name:</span> ${student.studentName}</p>
            <p><span>Age:</span> ${student.age}</p>
            <p><span>Email:</span> ${student.email}</p>
            <p><span>Course:</span> ${student.course}</p>
        </div>
    `).join("")
}


document.getElementById("studentForms").addEventListener("submit",addStudents)
