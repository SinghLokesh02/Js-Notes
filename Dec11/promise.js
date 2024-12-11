// Pending
// Fulfilled
// Rejected

// Create a new promise
const bucket = ["Mango","Water","Sugar","Ice cubes","Cherry","Mixer","Oil","Salt","Masala"]
const promise = new Promise((resolve,reject)=>{
    if(bucket.includes("Mango") && bucket.includes("Sugar") &&bucket.includes("Mixer")){
        resolve({name:"Lokesh"})
    }
    else{
        reject(false)
    }
})

// Comsume Promise Method - 1
// promise.then((val)=>{
//     console.log("Juice Pilo Ban Gya");
//     console.log(val);
    
// },(val)=>{
//     console.log("Acha sila dia ");
//     console.log(val);
// })

// Method - 2
promise
.then((val)=>{
    console.log("Juice Pilo Ban Gya");
    console.log(val);
})
.catch((val)=>{
    console.log("Acha sila dia ");
    console.log(val);
})