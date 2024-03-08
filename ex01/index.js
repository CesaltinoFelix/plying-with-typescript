var Produto = /** @class */ (function () {
    function Produto(id, nome, preco) {
        this.idProduto = id;
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
var Fornecedor = /** @class */ (function () {
    function Fornecedor(id, nome, nif, idProduto) {
        this.idFornecedor = id;
        this.nome = nome;
        this.nif = nif;
        this.idProduto = idProduto;
    }
    return Fornecedor;
}());
var Pedido = /** @class */ (function () {
    function Pedido(id, listaProdutos, nome) {
        this.idPedido = id;
        this.listaProdutos = listaProdutos;
        this.nome = nome;
    }
    return Pedido;
}());
var produtos = [
    new Produto(1, "Arroz", 22000),
    new Produto(2, "Açucar", 18000),
    new Produto(3, "Massa", 15000),
    new Produto(4, "Feijão", 29000),
];
var fornecedores = [
    new Fornecedor(1, "Cesaltino Felix", "007242560LA046", 1),
    new Fornecedor(2, "Marcia Kimbamba", "007242560LA042", 1),
    new Fornecedor(1, "Cesaltino Felix", "007242560LA046", 2),
    new Fornecedor(1, "Cesaltino Felix", "007242560LA046", 3),
    new Fornecedor(1, "Marcia Kimbamba", "007242560LA042", 4),
];
var pedidos = [
    new Pedido(1, [
        { idProduto: 1, qtd: 2 },
        { idProduto: 2, qtd: 1 },
    ], "Fernando Felix"),
    new Pedido(2, [
        { idProduto: 1, qtd: 2 },
        { idProduto: 2, qtd: 1 },
        { idProduto: 3, qtd: 1 },
    ], "Francisca Felix"),
    new Pedido(3, [
        { idProduto: 1, qtd: 2 },
        { idProduto: 2, qtd: 1 },
        { idProduto: 3, qtd: 3 },
        { idProduto: 4, qtd: 5 },
    ], "Marcia Felix"),
];
pedidos.forEach(function (pedido) {
    console.log("INFORMACAO DO PEDIDO ".concat(pedido.idPedido));
    console.log("NOME : " + pedido.nome);
    console.log("PRODUTOS : ");
    var total = 0;
    pedido.listaProdutos.forEach(function (produto) {
        produtos.forEach(function (prod) {
            if (prod.idProduto === produto.idProduto) {
                console.log("ID : " + prod.idProduto + " | NOME : " + prod.nome + " | PRECO : " + prod.preco + " | QTD : " + produto.qtd);
                console.log("SUBTOTAL : " + prod.preco * produto.qtd);
                total += prod.preco * produto.qtd;
            }
        });
        console.log("           FORNECEDORES : ");
        fornecedores.forEach(function (forn) {
            if (forn.idProduto === produto.idProduto) {
                console.log("           ID : " + forn.idFornecedor + " | NOME : " + forn.nome + " | NIF : " + forn.nif);
            }
        });
        console.log("");
    });
    console.log("TOTAL : " + total);
    console.log("====================================");
    console.log("");
    console.log("");
});
