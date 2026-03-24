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
        let studentNumber = ""

        do {
            const additionalNumbers = new Set();

            while (additionalNumbers.size < 5){
                let digit = Math.floor(Math.random() * 10)
                additionalNumbers.add(digit)
            }
            
            studentNumber = '2024' + [...additionalNumbers].join("")
        }

        while (Students.some(student => student.studentNumber === studentNumber))

        return studentNumber
    }



    validateStudent(){
        if(!this.isValidName()){
            throw new Error("Please enter a valid name with at least 5 letters. Only one space between names is allowed.")
        }
        if(!this.isValidAge()){
            throw new Error("Please enter an age between 19 and 98.")
        }

        if(!this.isValidEmail()){
            throw new Error("Please use a valid UP email ending in @up.edu.ph.")
        }
        if(!this.isValidCourse()){
            throw new Error("Please select a valid course from the list.")
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

function showFormMessage(message, type){
    const formMessage = document.getElementById("formMessage")
    formMessage.textContent = message
    formMessage.className = `form-message ${type}`
}



function addStudents(event){
    event.preventDefault();

    const form = document.getElementById("studentForms")

    const studentName = document.getElementById("name").value.trim()
    const studentAge = Number(document.getElementById("age").value)
    const studentEmail = document.getElementById("email").value.trim()
    const studentCourse = document.getElementById("course").value

    try {
        const student = new Student(studentName,studentAge,studentEmail,studentCourse)

        Students.push(student)
        console.log(student.studentNumber)

        showFormMessage(`Student added successfully. Student ID: ${student.studentNumber}`, "success")
        form.reset()
    } catch (error) {
        showFormMessage(error.message, "error")
    }

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
