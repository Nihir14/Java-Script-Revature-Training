const jsonString = '{"name":"Nihir","age":21}';

const obj = JSON.parse(jsonString);

console.log(obj.name);
console.log(obj.age);
console.log(typeof obj);