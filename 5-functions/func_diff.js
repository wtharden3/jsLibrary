// hoisting - allows your function to be available before it is declared because varibles are not hoisted so fat arrow functions are not hoisted either

let arr_func = () => {
  console.log("This is a fat arrow function")
}
arr_func();
std_func();

function std_func() {
  console.log("This is a std function")
}