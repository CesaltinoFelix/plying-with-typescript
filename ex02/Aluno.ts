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

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get idade(): number {
    return this._idade;
  }
  public set idade(value: number) {
    this._idade = value;
  }
  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }
  public toString(): string {
    return `${this._id} - ${this._nome} - ${this._idade} - ${this._matricula}`;
  }
}
