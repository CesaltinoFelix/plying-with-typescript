export class Professor{
    private _nome: string;
    private _email: string;
    private _idDisciplinas: Array<number>;

    constructor(nome: string, email: string, idDisciplinas: Array<number>){
        this._nome = nome;
        this._email = email;
        this._idDisciplinas = idDisciplinas;
    }
}