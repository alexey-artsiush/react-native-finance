export enum IResponseStatus {
    SUCCESS= "Success",
    ERROR= "Error",
}

export interface IApiResponse<T> {
    status: IResponseStatus
    message: string
    result: T
}


export interface ApiBadRequestError {
    reason: string
    body?: {
        description: string
    } 
}