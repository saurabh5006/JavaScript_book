let fruits = ["apple","mango","orange","graphs"];

for(let i of fruits){
    console.log(i)
};
const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`); // key1: value1, key2: value2
}

