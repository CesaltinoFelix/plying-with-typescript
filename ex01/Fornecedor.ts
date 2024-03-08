export class Fornecedor {
  public idFornecedor: number;
  public nome: string;
  public nif: string;
  public idProduto: number;

  constructor(id: number, nome: string, nif: string, idProduto: number) {
    this.idFornecedor = id;
    this.nome = nome;
    this.nif = nif;
    this.idProduto = idProduto;
  }
}
