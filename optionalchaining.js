const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: {
            name: "United States",
            code: "US"
        }
    },
    hobbies: ["reading", "traveling", "coding"],
    contact: {
        phone: "123-456-7890",
        email: "johndoe@example.com"
    }
};

console.log(person.name);
console.log(person?.address?.street);
console.log(person?.address?.country?.name);

 