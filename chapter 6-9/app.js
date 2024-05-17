// === Chapter 6-9 (Q1) === //

// var a = 10

// document.write("The value of ++a is: "+ ++a +"<br>")
// document.write("Now the value of a is: "+a+"<br>"+"<br>")


// document.write("The value of a++ is: "+ a++ +"<br>")
// document.write("Now the value of a is: "+ a +"<br>"+"<br>")


// document.write("The value of --a is: "+ --a +"<br>")
// document.write("Now the value of a is: "+ a +"<br>"+"<br>")


// document.write("The value of a-- is: "+ a-- +"<br>")
// document.write("Now the value of a is: "+ a +"<br>"+"<br>")

// document.write("Result:")
// document.write("The value of a is:"+a)


// === Chapter 6-9 (Q2) === //

// var a = 2 , b = 1
// var result = --a - --b + ++b + b--

// --a = 1
// --a - --b = 1-0
// --a - --b + ++b = 1-0+1
// --a - --b + ++b + b-- = 1-0+1+1

// document.write("a is:"+a+"<br>")
// document.write("b is:"+b+"<br>")
// document.write("Result is:"+result+)


// === Chapter 6-9 (Q3) === //

// var username = prompt("Welcome!\nYour name here")


// === Chapter 6-9 (Q4) === //

// tablenum = +prompt("Enter your number")

// var tablenum = 5
// var number1to10 = 1
// var multiplyby =1
// document.write("Multiplication table for " + tablenum + ":<br>");
// document.write(
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"+
//     tablenum+"x"+number1to10++ +"="+tablenum*multiplyby++ +"<br>"
// )


// === Chapter 6-9 (Q5) === //

// var subject1 = prompt("Enter first subject")
// var subject2 = prompt("Enter second subject")
// var subject3 = prompt("Enter third subject")

// var totalMarks = 100

// var obtainedMarks1 = +prompt("Obtained marks of "+ subject1+" subject")
// var obtainedMarks2 = +prompt("Obtained marks of "+ subject2+" subject")
// var obtainedMarks3 = +prompt("Obtained marks of "+ subject3+" subject")

// var obtainedMarks123 = obtainedMarks1+obtainedMarks2+obtainedMarks3
// var percentage = obtainedMarks123/300*100

// document.write(
//     `<table>
//     <tr>
//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th> 
//     </tr>
//     <tr>
//         <td>${subject1}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks1}</td>
//         <td>${obtainedMarks1}%</td>
//     </tr>
//     <tr>
//     <td>${subject2}</td>
//     <td>${totalMarks}</td>
//     <td>${obtainedMarks2}</td>
//     <td>${obtainedMarks2}%</td>
// </tr>
// <tr>
//         <td>${subject3}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks3}</td>
//         <td>${obtainedMarks3}%</td>
//     </tr>
//     <tr>
//     <th></th>
//     <th>300</th>
//     <th>${obtainedMarks123}</th>
//     <th>${percentage.toFixed(2)}%</th>
// </tr>

// </table>`
// )