console.log("start");

setTimeout(() => {
    console.log("Hello I m the mid");
}, 0);

let sum = 0;
for(let i = 0; i<100000000;i++){
    sum += i;
}
console.log(sum);



console.log("end");
