import { CompanyAccount } from "./models/CompanyAccount";
import { PeopleAccount } from "./models/PeopleAccount";
import { SalaryAccount } from "./models/SalaryAccount";

const peopleAccount: PeopleAccount = new PeopleAccount("Roger", 22, 235);
const peopleAccount2: PeopleAccount = new PeopleAccount("Rogerio", 2222, 235235);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 34)
const companyAccount2: CompanyAccount = new CompanyAccount("DIO DIO", 88)

peopleAccount.deposit(1000);
peopleAccount.withdraw(700);
peopleAccount2.deposit(2000);
peopleAccount2.withdraw(400);


console.log(peopleAccount);
console.log(peopleAccount2);
console.log("---------------------");

companyAccount.deposit(15000);
companyAccount.getLoan(5000);
companyAccount2.deposit(30000);
companyAccount2.getLoan(10000);


console.log(companyAccount);
console.log(companyAccount2);
console.log("---------------------");

const salaryAccount = new SalaryAccount("João", 122);
const salaryAccount2 = new SalaryAccount("JoãoZinho", 122221);

salaryAccount.depositSalary(100);
salaryAccount.depositSalary(200);
salaryAccount2.depositSalary(1000);
salaryAccount2.depositSalary(2000);



console.log(salaryAccount);
console.log(salaryAccount2);
console.log("---------------------");


