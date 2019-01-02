//1
const hello = 'Hello';
const world = 'World';

console.log(`${hello} ${world}`)

//2
let multiply = (a, b = 1) => a * b;

console.log(multiply(2, 5));

//3
const average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = data;

console.log(`${firstname} ${lastname}`);