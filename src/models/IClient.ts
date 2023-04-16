import { IAddress } from "./IAddress";

export interface IClient {
    id?: string
    name: string
    cpf: string
    birthday_UTC: Date
    gender: EGender
    occupation: string
    maritalStatus: EMaritalStatus
    addresses:[IAddress]
}

export enum EGender {
    Feminino = "Feminino",
    Masculino = "Masculino"
}

export enum EMaritalStatus{
    Casado = "Casado(a)",
    Viuvo = "Viúvo(a)",
    Divorciado = "Divorciado(a)",
    Separado = "Separado(a)",
    Solteiro = "Solteiro(a)"
}