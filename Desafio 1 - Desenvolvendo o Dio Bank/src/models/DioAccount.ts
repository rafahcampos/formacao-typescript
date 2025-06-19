export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;


    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }


    getBalance = (): number => {
        return this.balance;
    }


    deposit(depositValue: number) {
        this.validadeStatus() ? this.balance += depositValue : console.log("Operação de depósito não efetuada! Conta inválida\n");
    }

    withdraw = (withdrawValue: number) => {
        withdrawValue <= this.balance && this.validadeStatus()
            ? this.balance -= withdrawValue : console.log("Operação de saque não efetuada! Saldo insuficiente ou conta inválida.\n")

    }

    private validadeStatus = (): boolean => {
        if (this.status) {
            return this.status;
        } else {
            throw new Error("Conta inválida");
        }
    }
    protected getValidadeStatus(): boolean {
        return this.validadeStatus();
    }
}