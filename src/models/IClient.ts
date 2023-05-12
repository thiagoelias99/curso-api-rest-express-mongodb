import { IAccount } from "./IAccount";
import { IAddress } from "./IAddress";

export interface IClient {
    uuid?: string
    name: string
    cpf: string
    birthday_UTC: Date
    gender: EGender
    occupation: string
    maritalStatus: EMaritalStatus
    addresses?: IAddress[]
    accounts: IAccount[]
}

export enum EGender {
    Feminino = "Feminino",
    Masculino = "Masculino"
}

export enum EMaritalStatus {
    Casado = "Casado(a)",
    Viuvo = "Viúvo(a)",
    Divorciado = "Divorciado(a)",
    Separado = "Separado(a)",
    Solteiro = "Solteiro(a)"
}