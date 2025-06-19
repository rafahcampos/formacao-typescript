import { CompanyAccount } from "./models/CompanyAccount";
import { PeopleAccount } from "./models/PeopleAccount";
import { SalaryAccount } from "./models/SalaryAccount";

const peopleAccount: PeopleAccount = new PeopleAccount("Roger", 22, 235);
const companyAccount:CompanyAccount = new CompanyAccount("DIO", 34)

peopleAccount.deposit(1000);
peopleAccount.withdraw(1700);

console.log(peopleAccount);
console.log("---------------------");

companyAccount.deposit(15000);
companyAccount.getLoan(5000);

console.log(companyAccount);
console.log("---------------------");

const salaryAccount = new SalaryAccount("João", 122);

salaryAccount.depositSalary(100);
salaryAccount.depositSalary(200);

console.log(salaryAccount);
console.log("---------------------");


