// let users = ["Muhammadali" , "Javoxir" , "Munir" , "Jago" , "Jaxonbek" , "Shoxruh"]

// users.forEach((user) => {

//     console.log(user + " where is the money");
// })







// let users = ["Muhammadali" , "Javoxir" , "Munir" , "Jago" , "Jaxonbek" , "Shoxruh"]

// console.log(
//     users.forEach(el => el[0] === "M"),
//     users.filter(el => el[0] === "M"),
//     users.map(el => el[0] === "M"),
//     users.find(el => el[0] === "M"),

// );


// let arr = ["alex" , 1 , {} , null] 

// arr.filter(item => console.log(item)) 








// let numbers = [1,2,3,4,5]


// numbers.forEach((num) => {
//     if(num % 2 === 0) {
//         console.log(num , "even");
//     } else {
//         console.log(num , "odd");
//     }

// } )







// let numbers = [1,2,3,4,5]

// let total = 0

// numbers.forEach( (num) => total += num)

// numbers.forEach( (num) => total = total +num)

// console.log(total);










let arr = ["alex" , 1 , {} , null, [], 12, 34, "sda", true ] 

let string = 0
let number = 0
let object = 0
let boolean = 0



arr.filter(item => {
    if (typeof(item) === "string") {
        string++
    } else if (typeof(item) === "number") {
        number++
    } else if (typeof(item) === "object") { 
        object++
    } else if (typeof(item) === "boolean") { 
        boolean++
    } 
} )

console.log( string + " string");
console.log( number + " number");
console.log( object + " object");
console.log( boolean + " boolean");



