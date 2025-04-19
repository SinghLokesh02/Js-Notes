let fruits = ["Apple","mango","banana","orange","lichi","papaya","melon"]

// delete
// const deletedItems = fruits.splice(1,2)
// console.log(fruits);
// console.log(deletedItems);



// Add
// fruits.splice(3,0,"New1","New2")
// console.log(fruits);


// Replace
// fruits.splice(3,2,"New1","New2")
// console.log(fruits);


// Fill Method

// let arr = new Array(10).fill(null)
// console.log(arr);


let n = [...fruits,"New Element"].fill("Abc",2,3)
console.log(n);
