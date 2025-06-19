
import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    private loanBalance: number = 0;
    private readonly interestRate = 0.15;


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan(loanValue: number): void {
        if (super.getValidadeStatus()) {
            console.log(super.getValidadeStatus());

            this.balance += loanValue;
            this.loanBalance += ( loanValue + (loanValue * this.interestRate));

        } else {

            console.log("Empréstimo não altorizado! Conta inválida.");

        }
    }



}