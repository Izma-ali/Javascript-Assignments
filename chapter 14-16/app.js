// === Chapter 14-16 (Q1) === //

// var studentNames = []


// === Chapter 14-16 (Q2) === //

// var studentNames = [{}]


// === Chapter 14-16 (Q3) === //

// var strings = ["a","b","c"]


// === Chapter 14-16 (Q4) === //

// var numbers =[1,2,3]


// === Chapter 14-16 (Q5) === //

// var boolean = ["true","false"]


// === Chapter 14-16 (Q6) === //

// var arrayMixed = ["a",1,"b",2]


// === Chapter 14-16 (Q7) === //

// var availableQualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("Qualifications:"+"<br>")
// document.write("1."+availableQualifications[0]+"<br>"+
// "2."+availableQualifications[1]+"<br>"+
// "3."+availableQualifications[2]+"<br>"+
// "4."+availableQualifications[3]+"<br>"+
// "5."+availableQualifications[4]+"<br>"+
// "6."+availableQualifications[5]+"<br>"+
// "7."+availableQualifications[6]+"<br>"+
// "8."+availableQualifications[7]+"<br>"   
// )


// === Chapter 14-16 (Q8) === //

// var studentNames = ["Izma","Sameed","Wirad"]
// var score = [450,420,460]
// var totalMarks = 500

// document.write("Score of "+studentNames[0]+" is "+score[0]+".Percentage:"+score[0]/totalMarks*100+"%"+"<br>"+
// "Score of "+studentNames[1]+" is "+score[1]+".Percentage:"+score[1]/totalMarks*100+"%"+"<br>"+
// "Score of "+studentNames[2]+" is "+score[2]+".Percentage:"+score[2]/totalMarks*100+"%"+"<br>"
// ) 


// === Chapter 14-16 (Q9) === //

// // document.write("<h3></h3>")
// var colorNames = ["orange", "red", "yellow", "blue", "green"]
// document.write("COLORS" + "<br>")
// document.write(colorNames + "<br>")
//    (a)
// var color = prompt("What color you want to add in the beggining?")
// colorNames.unshift(color)
// document.write("COLOR ADDED IN THE BEGINNING"+"<br>")
// document.write(colorNames+"<br>")
//    (b)
// var color = prompt("What color you want to add in the end?")
// colorNames.push(color)
// document.write("COLOR ADDED IN THE END"+"<br>")
//  document.write(colorNames+"<br>")
//    (c)
// colorNames.splice(0,0,"black","brown")
// document.write("COLOR ADDED IN THE BEGINNING"+"<br>")
// document.write(colorNames)
//    (d)
// colorNames.shift(0)
// document.write("COLOR DELETED FROM THE BEGINNING"+"<br>")
// document.write(colorNames)
//    (e)
// colorNames.pop(4)
// document.write("COLOR DELETED FROM THE END"+"<br>")
// document.write(colorNames)
//    (f)
// var position = +prompt("At which position you want to add the color?")
// var colour = prompt("Tell the color")
// colorNames.splice(position,0,colour)
// document.write("COLOR ADDED AT THE DESIRED POSITION"+"<br>")
// document.write(colorNames)
//    (g)
// var position = +prompt("From which position you want to delete the color?")
// var colour = prompt("How many colors you want to delete?")
// colorNames.splice(position,colour)
// document.write("COLOR DELETED FROM THE DESIRED POSITION"+"<br>")
// document.write(colorNames)



// === Chapter 14-16 (Q10) === //

// var studentsScore = [320,230,480,120]
// var orderedscore = studentsScore.sort()
// console.log(orderedscore)


// === Chapter 14-16 (Q11) === //

// var citiesName = ["Lahore", "Karachi", "Islamabad", "Quetta", "Peshawar"]
// var selectedCities = []
// selectedCities[0] = citiesName[1]
// selectedCities[1] = citiesName[3]
// selectedCities[2] = citiesName[4]
// console.log(selectedCities)


// === Chapter 14-16 (Q12) === //

// var arr = ["This","is","my","cat"]
// var singlestring = arr.join(" ")
// console.log(singlestring)


// === Chapter 14-16 (Q13) === //

// var devices = []
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")

// console.log(devices)


// === Chapter 14-16 (Q14) === //

// var devices = []
// devices.unshift("keyboard")
// devices.unshift("mouse")
// devices.unshift("printer")
// devices.unshift("monitor")

// console.log(devices)


// === Chapter 14-16 (Q15) === //

// var phManufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

// document.write(
// `<select>
//     <option>${phManufacturers[0]}</option>
//     <option>${phManufacturers[1]}</option>
//     <option>${phManufacturers[2]}</option>
//     <option>${phManufacturers[3]}</option>
//     <option>${phManufacturers[4]}</option>
//     <option>${phManufacturers[5]}</option>
// </select>`
// )