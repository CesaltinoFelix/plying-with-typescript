export class Aluno {
  private _nome: string;
  private _idade: number;
  private _matricula: string;
  private _id: number;

  constructor( id: number, nome: string, idade: number, matricula: string)
  {
    this._id = id;
    this._nome = nome;
    this._idade = idade;
    this._matricula = matricula;
  }
}
