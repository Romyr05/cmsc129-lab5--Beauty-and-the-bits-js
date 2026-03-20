//Object
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
        
        console.log(additionalNumbers)
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
        const regexPattern = /^[A-Za-z]+ [A-Za-z]+$/     //Regex Pattern from a to Z with one space can allow -
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
    
    isValidCourse(Course){
        const validCourses = [
        "BA Food Appreciation",
        "BA Applied Poetry of the Future",
        "BS Computer Repair Shop",
        "BS Video Gaming",
        "BS Installing and Downloading"
        ];

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

    
    DateToday = today.toLocaleDateString("en-US",DateOptions)
    DayToday = today.toLocaleDateString("en-US",DayOptions)
    timeNow = today.toLocaleString("en-US",timeNowOptions)

    console.log(timeNow)
    




    document.getElementById("dateToday").textContent = `Today is ${DateToday}, ${DayToday}.`;
    document.getElementById("timeNow").textContent = `The current time is ${timeNow}.`

}

//Here put all students 
Students = []



//just checking if it works using node
try {
    const student3 = new Student(
        "Juan Cruz",
        20,
        "juan@up.edu.ph",
        "BS Video Gaming"
    );
    console.log(student3);
} catch (error) {
    console.log(error.message);
}


