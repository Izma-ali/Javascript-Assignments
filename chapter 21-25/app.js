// === Chapter 20-25 (Q1) === //

// var firstName = prompt("Enter your first name") 
// var lastName = prompt("Enter your last name") 

// var fullName = firstName+lastName
//  alert("welcome "+fullName)


// === Chapter 20-25 (Q2) === //

// var fvrtPhone = prompt("What's your favourite mobile phone model?")
// var inputLength = fvrtPhone.length
// document.write(fvrtPhone)
// document.write("<br>")
// document.write("Length of your input :"+inputLength)

// === Chapter 20-25 (Q3) === //

// var str = "Pakistani"
// document.write("Index of 'n' :"+str.indexOf("n"))


// === Chapter 20-25 (Q4) === //

// var str = "Hello World"
// document.write("Last index of 'l' :"+str.lastIndexOf("l"))


// === Chapter 20-25 (Q5) === //

// var str = "Pakistani"
// document.write("Character at index 3 :"+str.charAt(3))


// === Chapter 20-25 (Q6) === //

// var firstName = prompt("Enter your first name") 
// var lastName = prompt("Enter your last name") 

// var fullName = firstName.concat(' ',lastName)
// console.log(fullName);


// === Chapter 20-25 (Q7) === //

// var city = "Hyderabad"
// var replaced = city.replace('Hyder','Islam')

// document.write("After replacement :"+replaced)


// === Chapter 20-25 (Q8) === //

// var message = "Ali and Sami are best friends.They play cricket and football together."
// var replaced = message.replace(/and/g,'&')
// console.log(replaced);


// === Chapter 20-25 (Q9) === //

// var value = "472"
// document.write("Value :"+value+"<br>")var
// document.write("Type :"+typeof(value)+"<br>")
// document.write("Value :"+value+"<br>")
// var num = Number(value)
// document.write("Type :"+typeof(num))


// === Chapter 20-25 (Q10) === //

// var input = prompt("Enter a dryfruit name")
// document.write(input.toUpperCase())


// === Chapter 20-25 (Q11) === //

// var input = prompt("Enter something name")
// var titleCase = input.slice(0,1).toUpperCase()+input.slice(1).toLowerCase()
// console.log(titleCase);


// === Chapter 20-25 (Q12) === //

// var num = 35.36
// var converted  = num.toString().replace(".","")

// document.write(converted)


// === Chapter 20-25 (Q13) === //

// var userInput = prompt("Enter a username")
// var arr = ["@", ".", ",", "!"]
// for (var i = 0; i < userInput.length; i++){
//     for(var j=0;j<arr.length;j++){
//         if (userInput[i]==arr[j]) {
//             alert("Please enter a valid username")
//         }

//     }
// }
// === Chapter 20-25 (Q14) === //

// var items = ["cake","applepie","cookie","chips","patties"]
// var available = false
// var userInput = prompt("Welcome to Sweet Bakery,What do you want to order?").toLowerCase()
// for(var i=0;i<items.length;i++){
// if(items[i]==userInput){
//     alert(userInput+" is available at index "+i+" in our bakery")
//     available=true
// }
// }
// if(available==false){
//     alert(userInput+" is not available in our bakery")
// }


// === Chapter 20-25 (Q15) === //

// var password = prompt("Enter a password containing alphabets and numbers")
// var code = password.charCodeAt(0)
// if(password.length<6){
// alert("enter a valid password")
// }
// if(code>=48 && code <= 57){
//     alert("enter a valid password")
// }


// === Chapter 20-25 (Q16) === //

// var str = "University of Karachi"
// var arr = str.split("")
// for(var i =0;i<arr.length;i++){

//     document.write(arr[i]+"<br>")
// }


// === Chapter 20-25 (Q17) === //

// var str = prompt("Enter a country")
// var lastLetter = str.slice(-1)
// console.log(lastLetter);


// === Chapter 20-25 (Q18) === //

// var str = "The quick brown fox jumps over the lazy dog"
// var lowered = str.toLowerCase()
// var arr = lowered.split(" ")
// var count = 0
// for(var i=0;i<arr.length;i++){
//     if(arr[i]== "the"){
//   count++;
//     }

// }
// console.log("There are "+count+" occurences of the word 'the'");