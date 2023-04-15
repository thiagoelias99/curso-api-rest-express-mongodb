export interface IAccount {
    id?: string
    accountNumber: string
    branch: number
    accountType: EAccountType
    cpf: string
    balance: number
}

export enum EAccountType {
    ContaCorrente = "Conta corrente",
    ContaSalario = "Conta salário",
    ContaPoupança = "Conta poupança"
}