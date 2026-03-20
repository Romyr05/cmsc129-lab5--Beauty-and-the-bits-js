//Object






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



