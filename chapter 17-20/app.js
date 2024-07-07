// === Chapter 17-20 (Q1) === //

// var arr = [[],[]]

// === Chapter 17-20 (Q2) === //

// var arr=[ 
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0;i<=2;i++){
//     for(var j=0;j<=3;j++){
//         document.write(arr[i][j])

//     }
//     document.write("<br>")
// }



// === Chapter 17-20 (Q3) === //

// for(var i=1;i<=10;i++){
// console.log(i)
// }


// === Chapter 17-20 (Q4) === //

// var table = +prompt("Enter a number for table")
// var tableLength = +prompt("Enter table length")
// for(var i=1;i<=tableLength;i++){
// console.log(table+"x"+i+"="+table*i)
// }


// === Chapter 17-20 (Q5) === // 

// var fruits =["apple","banana","mango","orange","strawberry"]
// for(var i=0;i<=4;i++){
// console.log(fruits[i])
// }


// === Chapter 17-20 (Q5) === //

// document.write("Counting:"+"<br>")
// for(var i=1;i<=15;i++){
// document.write(i+",")
// }

// document.write("<br>"+"Reverse Counting:"+"<br>")
// for(var i=10;i>=1;i--){
// document.write(i+",")
// }

// document.write("<br>"+"Even:"+"<br>")
// for(var i=0;i<=20;i++){
//     if(i%2==0){
//         document.write(i+",")
//     }
// }

// document.write("<br>"+"Odd:"+"<br>")
// for(var i=0;i<=20;i++){
//     if(i%2==!0){
//         document.write(i+",")
//     }
// }

// document.write("<br>"+"Even:"+"<br>")
// for(var i=1;i<=20;i++){
//     if(i%2==0){
//         document.write(i+"k,")
//     }
// }


// === Chapter 17-20 (Q7) === //

// var bakeryItems = ["cake","apple pie","cookie","chips","patties"]
// var available = false
// var userItem = prompt("Welcome to bakery!What do you want to order?")
// for(var i=0;i<=4;i++){
//     if(bakeryItems[i]==userItem){
//         console.log(userItem+"is available at index "+i+" in our bakery")
//         available=true
//     }
// }
// if(available==false){
// console.log("we are sorry "+userItem+" is not available in our bakery")
// }

// === Chapter 17-20 (Q8) === //

// var arr = [24, 53, 78, 91, 12]
// var largestNo = arr[0]
// for(var i=0; i<arr.length;i++){
//     if (arr[i]>largestNo) {
//         largestNo=arr[i]
//     }
// }
// document.write("The largest number is "+largestNo)



// === Chapter 17-20 (Q9) === //

// var arr = [24, 53, 78, 91, 12]
// var smallestNo = arr[0]
// for(var i=0; i<arr.length;i++){
//     if (arr[i]<smallestNo) {
//         smallestNo=arr[i]
//     }
// }
// document.write("The smallest number is "+smallestNo)


// === Chapter 17-20 (Q10) === //

// for(var i=1;i<=20;i++){
// document.write(5*i+",")
// }