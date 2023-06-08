const Manager = require('./manager');
const Employee = require('./employee');

const hob = new Manager('Hobbes', 1000000, 'Founder');
const cal = new Manager('Cavin', 130000, 'Director', hob);
const sus = new Manager('Susie', 100000, 'TA Manager', cal);
const lil = new Employee('Lily', 90000, 'TA', sus);
const cli = new Employee('Clifford', 90000, 'TA', sus);

console.log(hob.calculateBonus(0.05)); //70500
console.log(cal.calculateBonus(0.05)); //20500
console.log(sus.calculateBonus(0.05)); //14000
console.log(lil.calculateBonus(0.05)); //4500
console.log(cli.calculateBonus(0.05)); //4500
