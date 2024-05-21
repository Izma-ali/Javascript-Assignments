// === Chapter 9-11 (Q1) === //

// var cityName = prompt("Enter city name")
// if(cityName==="Karachi"){
//     alert("Welcome to the city of lights!")
// } 


// === Chapter 9-11 (Q2) === //

// var gender = prompt("What's your gender?")
// if(gender==="Male"){
//     alert("Good morning Sir!")
// }
// if(gender==="Female"){
//     alert("Good morning Ma'am!")
// }


// === Chapter 9-11 (Q3) === //

// var signalColor = prompt("Tell me the traffic signal color!")
// if(signalColor==="red"){
//     alert("Must stop!")
// }
// if(signalColor==="yellow"){
//     alert("Ready to move!")
// }
// if(signalColor==="green"){
//     alert("Move now!")
// }


// === Chapter 9-11 (Q4) === //

// var remainingFuel = prompt("How much fuel is remaining in your car?")
// if(remainingFuel<"0.25ltrs"){
//     alert("Please refil the fuel in your car!")
// }


// === Chapter 9-11 (Q5) === //
// (a) //
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
// output:true

// (b) //
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); } 

// output:false

// (c) //
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// output:2 and 4 are true

// (d) //
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); 
// } 
// output:true

// (e) //
// if (true){ 
//     alert("True"); 
//     } 
//     if (false){ 
//     alert("False"); 
//     }
    
// (f) //
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); }
// output:true


// === Chapter 9-11 (Q6) === //

// var sub1 = +prompt("Enter marks of first subject")
// var sub2 = +prompt("Enter marks of second subject")
// var sub3 = +prompt("Enter marks of third subject")

// var totalMarks = 300
// var obtainedMarks = sub1+sub2+sub3
// var percentage = (obtainedMarks/totalMarks)*100

// document.write("<h1>Mark Sheet</h1>")
// document.write("Total Marks : "+totalMarks+ "<br>")
// document.write("Marks Obtained : "+obtainedMarks+ "<br>")
// document.write("Percentage : "+percentage+ "<br>")

// if(percentage>=80){
//     document.write("Grade : A-one" + "<br>" )
//     document.write("Remarks : Excellent")
// }
// if(percentage>=70 && percentage<80){
//     document.write("Grade : A" + "<br>" )
//     document.write("Remarks : Good")
// }
// if(percentage>=60 && percentage<70){
//     document.write("Grade : B" + "<br>" )
//     document.write("Remarks : You need to improve")
// }
// if(percentage<60){
//     document.write("Grade : Fail" + "<br>" )
//     document.write("Remarks : Sorry")
// }


// === Chapter 9-11 (Q7) === //

// var secretNum = +prompt("Guess a num between 1 to 10")
// if(secretNum===5){
//     alert("Bingo! Correct answer")
// }
// if(secretNum===6){
//     alert("Close enough to the correct answer")
// }


// === Chapter 9-11 (Q8) === //

// var num = +prompt("Enter a number which is divisible by 3")
// if(num%3===0){
//     alert("Congrats!This number is divisible by 3. ")
// }


// === Chapter 9-11 (Q9) === //

// var num = +prompt("Enter a number to check whether it is even or odd.")
// if(num%2===0){
//     alert(num+" is even")
// }
// if(num%2!==0){
//     alert(num+" is odd")
// }


// === Chapter 9-11 (Q10) === //

// var temperature= +prompt("What's the temperature outside?")
// if(temperature>40){
//     alert("It is too hot outside.")
// }
// if(temperature>30){
//     alert("The Weather today is normal.")
// }
// if(temperature>20){
//     alert("Today's weather is cool.")
// }
// if(temperature>10){
//     alert("OMG!Today's weather is soo cool.")
// }


// === Chapter 9-11 (Q11) === //

// var firstNum = +prompt("Enter your first number")
// var secondNum = +prompt("Enter your second number")
// var operation = prompt("Enter operation")

// if(operation=="+"){
//     alert(firstNum+secondNum)
// }
// if(operation=="-"){
//     alert(firstNum-secondNum)
// }
// if(operation=="/"){
//     alert(firstNum/secondNum)
// }
// if(operation=="*"){
//     alert(firstNum*secondNum)
// }
// if(operation=="%"){
//     alert(firstNum+secondNum)
// }
