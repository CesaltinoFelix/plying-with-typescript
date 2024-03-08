import { Aluno } from "./Aluno";

export class Turma{
    private _id: number;
    private _nome: string;
    private _classe: number;
    private _curso: string;
    private _idAlunos: number[];
    constructor(id : number, nome: string, classe: number, curso: string, idAlunos: number[]){
        this._id = id;
        this._nome = nome;
        this._classe = classe;
        this._curso = curso;
        this._idAlunos = idAlunos;
    }
}