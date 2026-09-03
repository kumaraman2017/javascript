const StudentId="Aman"
let StudentEmail="aman@google.com"
var StudentPhoneNo="123456"
let StudentState
/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/
// StudentId="hdfbjdf"//not allowed
console.log(StudentId);
console.table([StudentId,StudentEmail,StudentPhoneNo,StudentState])