import { Aluno } from "./Aluno";

export class Turma{
    public id: number;
    public nome: string;
    public classe: number;
    public curso: string;
    public idAlunos: number[];
    constructor(id : number, nome: string, classe: number, curso: string, idAlunos: number[]){
        this.id = id;
        this.nome = nome;
        this.classe = classe;
        this.curso = curso;
        this.idAlunos = idAlunos;
    }
}