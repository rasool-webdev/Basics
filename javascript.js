
/* Variable & values 

let userName ="Hello World"
console.log(userName)
// let can change value 
userName ="Welcom World"
console.log(userName)
// const cant change value its constant
const Name ="Rasool"
console.log(Name) 
*/

/* Functions & Parameters
//
 function grate(Name,Massage="Welcome"  ){
  console.log(Name)
  console.log(Massage)
}
grate("max")
grate("max","Hello.....")

//
function createGreeting(Name,Massage="Welcome"  ){
  return Name + Massage
}
const  greeting1=createGreeting("max ")
console.log(greeting1)

const greeting2=createGreeting("max ","Hello")
console.log(greeting2)

*/

/* Arrow Function  //Pending

export default (user,message) =>{
console.log("hello")
return user + message;
}
*/

/* Objects & Classes
//Object
const user={
  name:"Max",
  age: 27,
  greet(){
    console.log("hello")
    console.log(this.age)
  }
}
console.log(user.name)
user.greet()

//Classes
class User{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  greet(){
    console.log("Welcome")
  }
}
const user1= new User("mark",22)
console.log(user1);
user1.greet();
 */

/* Arrays & Array Methods like map()
//array
const hobbies =["sports","cooking","reading"]
console.log(hobbies[0])
//arrya methods 
hobbies.push("working")
console.log(hobbies)

const index= hobbies.findIndex((item)=> item === "sports")
console.log(index)

const editHobbies =hobbies.map((item)=>({text:item}))
console.log(editHobbies)
 */

/* Destructuring 
//for array
const [firstName, lastName]=["tony","stark"]
console.log(firstName)
console.log(lastName)

//for object
const {name:userName,age}={
  name:"Max",
  age:23
}
console.log(userName)
console.log(age)
*/

/* Spread Operator 
//for array
const hobbies=["sports","cooking"]
const user={
  name:"max",
  age:25
}
const newHobbies=["reading"]

const mergedHobbies=[...hobbies,...newHobbies]
console.log(mergedHobbies)
//for object
const extendedUser={
  isAdmin:true,
  ...user
}
console.log(extendedUser)
*/

/* Control Structures 
const password =prompt("your Password")
if(password === "Hello"){
console.log("Hello world")
} else if(password === "hello"){
  console.log("hello world")
} else{
  console.log("access not granted")
}
//for loop
const hobbies =["sports","cooking"]
for (const hobby of hobbies){
  console.log(hobby)
}
*/

/* Functions as Values 
function handleTimeout(){
  console.log("Time out")
}
const handleTimeout2=()=>{
  console.log("Time out... again")
}

setTimeout(handleTimeout,2000)
setTimeout(handleTimeout2,3000)
setTimeout(()=>{
  console.log("More time out..",)}
, 4000)
*/

/* Functions Inside Of Functions 
function init(){
  function greet(){
    console.log("Hi")
  }
  greet()
}

init()
*/

let myObject = { 
    name: 'raju_webdev', 
    website: 'geeks help',  
    role: 'frontend developer', 
    age: 20 
} 
console.log('Our object is: ' + myObject) 
 
let myArray = [4, 15, 20, 22, 'geeks help']; 
console.log('Your array is: ' + myArray); 
 
let newDate = new Date(); 
console.log('Current Date is: ' + newDate); 
 
function myFunction()
{ 
console.log('This is myFunction'); 
}
myFunction()







