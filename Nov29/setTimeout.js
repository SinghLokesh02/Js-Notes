// Settimeout => (function,time-in-millisec)

function Hello() {
  console.log("Hello");
}
function bye() {
  console.log("Bye Bye");
}

setTimeout(bye, 1000);
setTimeout(Hello, 1000);

let id = setTimeout(() => {
  console.log("I m inside a Function");
}, 5000);

clearTimeout(id);
