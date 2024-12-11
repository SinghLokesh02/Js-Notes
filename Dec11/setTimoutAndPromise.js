const bucket = ["Mango","Water", "Ice cubes","Cherry","Mixer","Oil","Salt","Masala"]

function ReturningPromise(){
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(bucket.includes("Mango") && bucket.includes("Sugar") &&bucket.includes("Mixer")){
                resolve({name:"Lokesh"})
            }
            else{
                reject(false)
            }
        }, 2000);
    })
    
}

ReturningPromise()
.then((val)=>{
    console.log("Juice Pilo Ban Gya");
    console.log(val);
})
.catch((val)=>{
    console.log("Acha sila dia ");
    console.log(val);
})