        
//             Equating without alias
//
// let user1 = {
//     userName : "Koushik",
//     Age: 20
// }
// let user2 = {
//     userName : "Sarthak",
//     Age: 16
// }
// user2 = { ...user1}


//            String
//
// let s1= "Raju"
// let s2 = new String("Rascal")
// console.log(`My name is ${s1}`)
// console.log(s2.indexOf('a'))



//            Numbers
// const balance = 25.4624
// console.log(balance.toFixed(3))
// console.log(balance.toPrecision(3))

//             Dates
let mydate = new Date()
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString('default',{
    dateStyle: "full",
}))

