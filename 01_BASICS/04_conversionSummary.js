//Primitive

// 7 types:String,Number,Boolean,null,undefined,symbol,bigint

const score=100
const scoreValue=100.3

const LoggedIn=false
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

const bignumber=3455389373473994n
// Reference (Non-primitive)

// Array,Object,Functions

const heros=["hi","hello","hey"]
let obj={
    name:"Aman",
    age:100,
}

const myfunc=function(){
    console.log("Hello World");
}

//console.log(typeof bignumber)
//console.log(typeof heros)
//console.log(typeof obj)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

let youtubeName="amandotcom"
let anoname=youtubeName
anoname="aman.com"
console.log(youtubeName)
console.log(anoname)

let userOne={
    email:"aman.com",
    upi:"aman.ybl",
}
let userTwo=userOne

userTwo.email="ak.com"
console.log(userOne.email)
console.log(userTwo.email)
