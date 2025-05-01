console.log("Start");

process.nextTick(() => {
  console.log("NextTick Called");
});


setTimeout(() => {
    console.log("Timer Expired");
}, 0);

setImmediate(() => {
  console.log("Immidiate fuction Called");
});

Promise.resolve().then(()=> console.log("Promise Resolved"));
console.log("End of File");




// Print Factorial
function printFactorialIteratively(num){
  let factorial = 1;
  for(let start = 1;start <= num; start++){
      factorial *= start;
  }
  return factorial;
}

function printFactorialRecursively(num){
  if(num <= 1)return 1;
  else 
  return num * printFactorialRecursively(num-1)
}


let num = 11;


let start = Date.now()
console.log(printFactorialRecursively(num))
console.log("Done in " + (Date.now() - start) + 'ms')