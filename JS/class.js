// let total = 0;
// const num1 = 5;
// const num2 = 10;

// function getSum(a,b){
//     return total = a+b
// }
// getSum(num1, num2)

// const add = {
//     total: 0, 
//     num1: 5,
//     num2: 10,

//     getSum(){
//         return this.total = this.num1 + this.num2
//     }
// }

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);

const wage = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,

    getWage(){
        return this.baseSalary + this.overtime * this.rate;
    }
}
console.log(wage.getWage());

