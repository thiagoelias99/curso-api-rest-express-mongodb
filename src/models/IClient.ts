export interface IClient {
    id?: string
    name: string
    cpf: string
    birthday: Date
    gender: EGender
    ocuppation: string
    maritalStatus: EMaritalStatus
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