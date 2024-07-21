// === Chapter 31-35 (Q1) === //

// var rightnow = new Date()
// console.log(rightnow);


// === Chapter 31-35 (Q2) === //

// var months = ['january','february','march','april','may','june','july','august','september','october','november','december']
// var now = new Date()
// var currentMonth = now.getMonth()
// var nameOfMonth = months[currentMonth]
// alert(nameOfMonth)


// === Chapter 31-35 (Q3) === //

// var days = ['sun','mon','tue','wed','thur','fri','sat']
// var now = new Date()
// var currentday = now.getDay()
// var nameOfday = days[currentday]
// alert("Today is "+nameOfday)


// === Chapter 31-35 (Q4) === //

// var days = ['sun','mon','tue','wed','thur','fri','sat']
// var now = new Date()
// now.setDate(7)
// var currentday = now.getDay()
// var nameOfday = days[currentday]
// if(nameOfday=="sun" || nameOfday=="sat"){
// alert("It's Fun day")
// }
// else{
// alert("Today is "+nameOfday)
// }


// === Chapter 31-35 (Q5) === //

// var now = new Date()
// var currentdate = now.getDate()
// if(currentdate>=1 && currentdate<=15){
// alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// === Chapter 31-35 (Q6) === //

// var now = new Date()
// var milisSince = now.getTime()
// var mins = milisSince/(1000*60)
// console.log(mins);


// document.write(
//     "Current date : "+ now +"<br>"+
//     "Elapsed milliseconds since January 1,1970 : "+milisSince+"<br>"+
//     "Elapsed minutes since January 1,1970 : "+mins

// )

// === Chapter 31-35 (Q7) === //

// var now = new Date()
// var currentTime = now.getTime()
// if(currentTime<"12"){
//     alert(
//     "It's AM"
//     )
// }
// else{
//     alert(
//     "It's PM"
//     )
// }

// === Chapter 31-35 (Q8) === //

// var laterDate = new Date("December 31,2020")
// console.log("Later date: "+laterDate);

// === Chapter 31-35 (Q9) === //

// var ramzanDate = new Date("March 12,2024")
// var previousRamzan = new Date("June 18,2015")
// var diff = ramzanDate-previousRamzan
// var noOfDays = Math.floor(diff/(1000*60*60*24))
// console.log(noOfDays+" days have passed since 1st Ramadan,2015");


// === Chapter 31-35 (Q10) === //

// var begginningOf2015 = new Date("January 1,2015")
// var refDate = new Date("December 5,2015")
// var diff = refDate-begginningOf2015     
// var seconds = Math.floor(diff/(1000))
// console.log("On refrence date "+refDate+","+seconds+" seconds had passed since beginning of 2015");


// === Chapter 31-35 (Q11) === //

// var now = new Date()
// document.write("current date:"+now+"<br>")
// var hour = now.getHours()
// now.setHours(hour-1)
// document.write("1 hour ago it was :"+now)
// console.log();


// === Chapter 31-35 (Q12) === //

// var now = new Date()
// document.write("current date:"+now+"<br>")
// var year = now.getFullYear()
// now.setFullYear(year-100)
// document.write("100 years back,it was "+now)


// === Chapter 31-35 (Q13) === //

// var now = new Date()
// var age = +prompt("what's your age?")
// var currentYear = now.getFullYear()
// var birthYear = currentYear-age
// document.write("Your age is : "+age+"<br>")
// document.write("Your birth year is : "+birthYear)


// === Chapter 31-35 (Q14) === //

// document.write("K-Electric Bill"+"<br>")

// var cstmrName = prompt("Enter your name")
// document.write("Customer name : "+ cstmrName +"<br>")

// var months = ['january','february','march','april','may','june','july','august','september','october','november','december']
// var now = new Date()
// var currentMonth = now.getMonth()
// var nameOfMonth = months[currentMonth]
// document.write("Month : "+ nameOfMonth +"<br>")

// var units = +prompt("Enter no.of units")
// document.write("No.of units : "+units +"<br>")

// var charges = +prompt("Enter charges per unit")
// document.write("Charges per unit : "+charges+"<br>")

// var lateSurchrge = +prompt("Enter late payment surcharge")

// var netAmount = units*charges
// var grossAmount = netAmount+lateSurchrge

// netAmount =netAmount.toFixed(0)
// grossAmount = grossAmount.toFixed(0)

// document.write("Net amount payable (within due date): "+netAmount+"<br>")
// document.write("Late payment surcharge : "+lateSurchrge+"<br>")
// document.write("Grosss amount payable (after due date) : "+grossAmount+"<br>")