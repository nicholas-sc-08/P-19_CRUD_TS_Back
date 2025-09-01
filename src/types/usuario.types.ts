export interface IUsuarioCreate {

    nome: string,
    email: string,
    cpf: string,
    idade?: number,
    senha: string,
}

export interface IUsuarioUpdate {

    nome?: string,
    email?: string,
    cpf?: string,
    idade?: number,
    senha?: string
}