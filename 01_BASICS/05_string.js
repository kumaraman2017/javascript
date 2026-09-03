const name="Aman"
const repoc=100
// console.log(name+repocount+"value")

console.log(`Hello my name is ${name} and my repo is ${repoc}`);
const gname=new String('AmanKumar')
console.log(gname[0])
console.log(gname.__proto__)
console.log(gname.length)
console.log(gname.toUpperCase())
console.log(gname.charAt(2))
console.log(gname.indexOf('a'))
const news=gname.substring(0,5)
console.log(news)
const anews=gname.slice(-8,3)
console.log(anews)

const newst="     aman   "
console.log(newst)
console.log(newst.trim())

const url="https://study.com/st%20aaa"
console.log(url.replace('%20','-'))
console.log(url.includes('st'))
console.log(gname.split('-'))