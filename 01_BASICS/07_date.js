/*
let myDate=new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


let createDate=new Date(2025,0,14);
console.log(createDate.toString())
console.log(createDate.toLocaleString())

let myTimestamp=Date.now()
console.log(myTimestamp)
console.log(createDate.getTime())
console.log(Math.floor(Date.now()/1000))
*/

let newDate=new Date();
console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday:'long'
})