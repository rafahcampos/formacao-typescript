import { DioAccount } from "./DioAccount";

export class SalaryAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);

    }

    depositSalary(depositValue: number) {
        super.deposit(depositValue + 10);
    }


}