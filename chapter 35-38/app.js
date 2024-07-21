// === Chapter 35-38 (Q1) === //

// function date() {
//     var now = new Date()
//     document.write(now)
// }
// date()


// === Chapter 35-38 (Q2) === //

// function greet() {
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")
//     alert("Hello "+firstName+" "+lastName)
// }
// greet()


// === Chapter 35-38 (Q3) === //

// function add() {
//     var no1 = +prompt("Enter no 1")
//     var no2 = +prompt("Enter no 2")
//     return no1+no2
// }
// console.log(add());


// === Chapter 35-38 (Q4) === //

     // Calculator//

// function calculator() {
//     var num1 = +prompt("Enter number 1")
//     var operator = prompt("Enter an operator")
//     var num2 = +prompt("Enter number 2")
//     var calculation ; 

//     if(operator==="+"){

//         calculation = num1+num2
//     }
//     else if(operator==="-"){
//        calculation= num1-num2
//     }
    
//     else if(operator==="*"){
//         calculation=num1*num2
//     }
//     else if(operator==="/"){
//        calculation= num1/num2
//     }
//     return calculation
// }     
// console.log(calculator());


// === Chapter 35-38 (Q5) === //

// function square(num) {
//     return num*num
    
// }
// console.log(square(10));


// === Chapter 35-38 (Q6) === //

// function factorial(n) {
//      if(n===0){
//     return 1
//      }
//      else{
//          return factorial (n-1)*n
//      }
// }
// console.log(factorial(7));


// === Chapter 35-38 (Q7) === //

// function counting() {
//      var startNum = +prompt("Enter a starting number for counting")
//      var endNum = +prompt("Enter an ending number for counting")

//      for(var i=startNum ; i<=endNum ;i++){
//            console.log(i);
//      }

// }
// counting()


// === Chapter 35-38 (Q8) === //

// function calculateHypotenuse() {
//      function calculateSquare(x) {
//           return x*x
//      }
//      var base = +prompt("Enter the base of a right angle triangle")
//      var perpendicular = +prompt("Enter the perpendicular of a right angle triangle")

//      var hypoteneuse = Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular))
//      alert("The hypotenuse of right angle triangle with base "+base+ " and perpendicular "+perpendicular + " is " + hypoteneuse)
// }
// calculateHypotenuse()


// === Chapter 35-38 (Q9) === //

// function area(width,height) {
//      return width*height
// }
// console.log("Area of rectangle : "+area(50,30));


// === Chapter 35-38 (Q9) === //

function palindrome() {
 var words = ['wow','madam','yay']    
 words= words.toString()
 console.log(words)
}
palindrome()