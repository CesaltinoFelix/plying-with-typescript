export class Professor{
    private _nome: string;
    private _email: string;
    private _idDisciplinas: Array<number>;
    private _turmas: Array<number>;
    constructor(nome: string, email: string, idDisciplinas: Array<number>, turmas: Array<number>){
        this._nome = nome;
        this._email = email;
        this._idDisciplinas = idDisciplinas;
        this._turmas = turmas;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get idDisciplinas(): Array<number> {
        return this._idDisciplinas;
    }
    public set idDisciplinas(value: Array<number>) {
        this._idDisciplinas = value;
    }
    public get turmas(): Array<number> {
        return this._turmas;
    }
    public set turmas(value: Array<number>) {
        this._turmas = value;
    }
    public toString(){
        return this._nome + " " + this._email;
    }

}