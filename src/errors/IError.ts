export interface IError extends Error{
    code: number
    body?: object
}