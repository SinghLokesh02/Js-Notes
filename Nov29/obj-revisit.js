function greet(address,hobby) {
  console.log(`Your name is ${this.name} and your age is ${this.age}`);
  console.log(address,hobby);
  
}

let obj = {
  name: "Lokesh",
  age: 22,
  class: "Not applicable",
};
let obj2 = {
  name: "Amit",
  age: 19,
  class: "Not applicable",
};
let obj3 = {
  name: "Mukesh",
  age: 24,
  class: "Not applicable",
};

// Call Method
// Syntax - function-name.call(obj,arguments)
// greet.call(obj,"Uttar Pradesh","Cricket")
// greet.call(obj3,"Madhya Pradesh","Reading")

// Apply Method
// Syntax - function-name.call(obj,[arguments])
// greet.apply(obj,["Uttar Pradesh","Cricket"])
// greet.apply(obj3,["Madhya Pradesh","Reading"])



// Call Method
// Syntax - function-name.call(obj,arguments)
let function1 = greet.bind(obj,"Uttar Pradesh","Cricket")
function1()
let function2 = greet.bind(obj3,"Madhya Pradesh","Reading")
function2()