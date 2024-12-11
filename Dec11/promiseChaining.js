const bucket = ["Mango","Water", "Sugar","Ice cubes","Cherry","Mixer","Oil","Salt","Masala"]

function ReturningPromise(){
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(bucket.includes("Mango") && bucket.includes("Sugar") &&bucket.includes("Mixer")){
                resolve({name:"rohit",age:22,contact:23456789120})
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
    if(val.name == "rohit"){
        throw Error("SomeThing Bad Occure")
    }
    else{
        return "Sab theek hai babua";
    }
})
.then((data)=>{
    console.log(data);
    return "Ok Theek hai";
})
.then((data)=>{
    console.log(data);
})
.catch((val)=>{
    console.log("Acha sila dia ");
    console.log(val);
})