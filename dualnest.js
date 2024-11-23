const data = {
    users: [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 }
    ],
    admins: [
        { name: "Charlie", age: 35 },
        { name: "David", age: 40 }
    ]
};

for (let role in data) {
    console.log(role + ":");
    for (let i = 0; i < data[role].length; i++) {
        console.log(data[role][i].name + ", Age: " + data[role][i].age);
    }
}



// another 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}



const person1 = new Person("Alice", 25);
console.log(person1.name); // Outputs: Alice
