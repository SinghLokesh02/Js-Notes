// Example - 1

// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World !");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans);
// ans()

// Example - 2

// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName + lastName);
//     }
//     return printName;
// }

// const ans = printFullName("Lokesh","Singh");
// ans()

// Example - 3

// function hello(x){
//     const a = "Apple";
//     const b = "Ball";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("Hey")
// ans()

// Example - 4
debugger;
// function takePowerAndReturnFunctionOfCube(power){
//     return function cube(number){
//         console.log(number**power);
//     }
// }

// const a = takePowerAndReturnFunctionOfCube(3);
// a(4)

// Example - 5

// function func(){
//     let counter = 0;
//     return function myFunc(){
//         if(counter<1){
//             console.log("Hello, You called me !");
//             counter++;
//         }
//         else{
//             console.log("Mai ek baar already call ho chuka hu.");
//         }
//     }
// }

// const one = func();
// one();
// one();

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (f) {
          console.log(a + b + c + d + e + f);
        };
      };
    };
  };
}
sum(1)(2)(3)(4)(5);
