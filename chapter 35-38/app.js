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
// var width =+ prompt("Enter width of rectangle") 
// var height =+ prompt("Enter height of rectangle")
// var result = area(width,height)
// console.log("Area of rectangle is = "+result);


// === Chapter 35-38 (Q10) === //

// function palindrome(string) {
//      var words = ""
//      for (var i = string.length - 1; i >= 0; i--) {
//           words += string[i]
//      }
//      if (string === words) {
//           alert(string + ' is a palindrome word')
//      }
//      else {
//           alert(string + ' is  not a palindrome word')
//      }
// }
// var str = prompt("Enter any word")
// palindrome(str)


// === Chapter 35-38 (Q11) === //

// function upperCase(str){
//      var arr = str.split(' ')
//      var newArr = []
//      for(var i=0 ;i<arr.length ;i++){
//           newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//      }
//      return newArr.join(' ')

// }
// var str = 'the quick brown fox'
// var result = upperCase(str)
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')


// === Chapter 35-38 (Q12) === //

// function longest(str) {
//     var split = str.split(' ');
//     var firstWord = split[0].length;
//     for (var i = 0; i < split.length; i++) {
//         if (firstWord < split[i].length) {
//             firstWord = split[i]
//         }
//     }
//     return firstWord;
// }
// var str = 'Web Development Tutorial ';
// var result = longest(str);
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')


// === Chapter 35-38 (Q13) === //

// function count(str, letter) {
//     var find=0;   
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             find += 1;
//         }
//     }
//     return find
// }
// var str = 'JSResourceS.com';
// var letter = 'o'
// var result = count(str, letter);
// document.write('The occurence of o in this string is ' + result)


// === Chapter 35-38 (Q14) === //

// function calcCircumference(value){
//     var circumference=2*3.141*value;
//     return circumference
// }
//  function calcArea(value){
//      var area=3.141*(value*value);
//      return area
//  }
// var radius=+prompt('Enter radius of circle ');
// var circumference=calcCircumference(radius);
// var area=calcArea(radius);
// document.write('The Circumference of circle is '+circumference+'<br>')
// document.write('The Area of circle is '+area+'<br>')
