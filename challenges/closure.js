// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();

// Explanation: 
console.log("---Closures Task 1---")
console.log("The variable internal is function scoped, and all functions, if statement and for loops within the myFunction() closure, or everything within the curly brackets of myfunction will have access to the variables declared in the myFunction function. Once nestedFunction sees that it does not have a variable called internal within its curly bracers, it check the myFunction function for the variable, and prints it to the console.") 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(someNum){
  let counter = 0;
  for(let i = someNum; i > 0; i--){
    
    counter = counter + i; 
  }
  return counter;
}
console.log ("---Closures Task 2---");
console.log(summation(10));