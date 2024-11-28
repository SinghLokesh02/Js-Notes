let data = [{ age: 20, name: "Alice" }, { age: 30, name: "Bob" }, { age: 20, name: "Charlie" }]

let ageData = [...new Set(data.map(element => element.age))]
let alldata = new Map()
ageData.forEach(personage =>{
    let group = data.filter(userdata => userdata.age === personage)
    alldata.set(personage,group);
})
console.log(alldata);
