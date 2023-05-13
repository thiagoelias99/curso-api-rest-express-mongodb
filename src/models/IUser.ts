export interface IUser {
    uuid: string,
    name: string,
    password: string,
    email: string,
    signupDate: string | Date
    lastLogin: string | Date
}