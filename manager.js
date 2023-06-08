const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary(){
        let sum = 0;
        //1. iterar sobre cada elemento del Array employees
        for(let i = 0; i < this.employees.length; i++) {
            //1.b si el elemento es manager sumar su salario a sum más el resultado de llamar al método sobre su propio Array de employees
            if(this.employees[i] instanceof Manager) {
                sum += (this.employees[i].salary + this.employees[i]._totalSubSalary());
            } else {
                //1.a si el elemento es employee solo sumar su salario a sum
                sum += this.employees[i].salary;
            }
        }
        //2. retorno la suma
        return sum;
    }

    calculateBonus(multiplier) {
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }
}

module.exports = Manager;

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000
