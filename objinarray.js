const people = [
    { name: 'Alice', age: 25 }, 
    { name: 'Bob', age: 30 }, 
    { name: 'Charlie', age: 35 }
];

console.log(people.name);

const data = [
    { name: 'Alice', scores: [90, 85, 88] },
    { name: 'Bob', scores: [78, 82, 80] },
];

for (const person of data) {
    console.log(`Scores for ${person.name}:`);
    for (const score of person.scores) {
        console.log(score); // Outputs each score for the person
    }
}
    
