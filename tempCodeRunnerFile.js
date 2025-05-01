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
