export class Produto {
  public idProduto: number;
  public nome: string;
  public preco: number;
  constructor(id: number, nome: string, preco: number) {
    this.idProduto = id;
    this.nome = nome;
    this.preco = preco;
  }
}