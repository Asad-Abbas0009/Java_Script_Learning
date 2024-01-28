// console.log("Hello World");

// //1.Function -> A block of code that fulfills a specific task.

// //function decration
// function run() {
//     console.log("runing")
// }
// //function call
// run();

// //Hoisting -> Its is process of moving function decration to the top of the file, done automatically by JS Engine. 


// //2.Named function assignment
// let stand = function walk() {
//     console.log("walking");
// }
// //call
// stand();
// //can't call #walk();
// // walk();


// //3.Anonymous function assignment
// let stand2 = function() {
//     console.log("walking2")
// }

// stand2();

// //sum
// function sum(){
//     let total = 0;
//     for(let value of arguments)
//         total = total+value;
    
//     return total;
// }

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

//Rest Operator -> ...

// function sum(num, value, ...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7,8);

// //Default Parameters
// function intrest(p, r, y){
//     return p*r*y/100;
// }
// console.log(intrest(100,100,5))


// let person = {
//     fName :'Asad',
//     lName : 'Abbas'
// };
// //  console.log(person);

// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }//issue read only
// console.log(fullName());
 

//GETTER SETTER
    // getter -> access properties
    // setter -> change or update or mutate properties

// let person = {
//     fName :'Asad',
//     lName : 'Abbas',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String){
//             throw new Error("you have not send a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// // person.fullName = 'Love babber';
// // console.log(person.fullName);

// //Error Handing
//     //try & catch method

//     try {
//         person.fullName = true;
//     }
//     catch(e){
//         alert(e);
//     }
//     console.log(person.fullName);

//Scope -> 

// var scope entire code.
//var keyword define in function scope it that function.

//Reducing an array

let arr = [1,2,3,4,5];
// let total = 0;

// for(let value of arr)
//     total = total + value;
// console.log(total);

//Reduce Method

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalSum);