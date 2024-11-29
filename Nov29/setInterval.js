console.log("Starting");

let i = 0;
let id = setInterval(() => {
  console.log("Hello", i++);
}, 1000);

console.log(id);

setTimeout(() => {
  clearInterval(id);
}, 10000);

console.log("Ending");
