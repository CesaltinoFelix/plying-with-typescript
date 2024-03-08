interface ListaProdutos {
    idProduto: number;
    qtd: number;
  }
  
export class Pedido {
  public idPedido: number;
  public listaProdutos: ListaProdutos[];
  public nome: string;

  constructor(id: number, listaProdutos: ListaProdutos[], nome: string) {
    this.idPedido = id;
    this.listaProdutos = listaProdutos;
    this.nome = nome;
  }
}
