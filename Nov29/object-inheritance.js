let grandparent = {
  surname: "Singh",
  address: "UP",
  name: "Ramlal",
  property: {
    land: "100 bhigha",
    salary: 10000,
    elephant: 5,
    buffalo: 10,
    camel: 3,
    vehicles: {
      car: 1,
      scooter: 3,
      bike: 2,
      cycle: 5,
    },
  },
};

let parent = Object.create(grandparent)
 
    parent.name = "Mohan",
    parent.address = "Jharkhand"
    parent.salary = 200000
 

console.log(parent.property);
