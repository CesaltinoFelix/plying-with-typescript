"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
const Fornecedor_1 = require("./Fornecedor");
const Pedido_1 = require("./Pedido");
const produtos = [
    new Produto_1.Produto(1, "Arroz", 22000),
    new Produto_1.Produto(2, "Açucar", 18000),
    new Produto_1.Produto(3, "Massa", 15000),
    new Produto_1.Produto(4, "Feijão", 29000),
];
const fornecedores = [
    new Fornecedor_1.Fornecedor(1, "Cesaltino Felix", "007242560LA046", 1),
    new Fornecedor_1.Fornecedor(2, "Marcia Kimbamba", "007242560LA042", 1),
    new Fornecedor_1.Fornecedor(1, "Cesaltino Felix", "007242560LA046", 2),
    new Fornecedor_1.Fornecedor(1, "Cesaltino Felix", "007242560LA046", 3),
    new Fornecedor_1.Fornecedor(1, "Marcia Kimbamba", "007242560LA042", 4),
];
const pedidos = [
    new Pedido_1.Pedido(1, [
        { idProduto: 1, qtd: 2 },
        { idProduto: 2, qtd: 1 },
    ], "Fernando Felix"),
    new Pedido_1.Pedido(2, [
        { idProduto: 1, qtd: 2 },
        { idProduto: 2, qtd: 1 },
        { idProduto: 3, qtd: 1 },
    ], "Francisca Felix"),
    new Pedido_1.Pedido(3, [
        { idProduto: 1, qtd: 2 },
        { idProduto: 2, qtd: 1 },
        { idProduto: 3, qtd: 3 },
        { idProduto: 4, qtd: 5 },
    ], "Marcia Felix"),
];
pedidos.forEach((pedido) => {
    console.log(`INFORMACAO DO PEDIDO ${pedido.idPedido}`);
    console.log("NOME : " + pedido.nome);
    console.log("PRODUTOS : ");
    var total = 0;
    pedido.listaProdutos.forEach((produto) => {
        produtos.forEach((prod) => {
            if (prod.idProduto === produto.idProduto) {
                console.log("ID : " + prod.idProduto + " | NOME : " + prod.nome + " | PRECO : " + prod.preco + " | QTD : " + produto.qtd);
                console.log("SUBTOTAL : " + prod.preco * produto.qtd);
                total += prod.preco * produto.qtd;
            }
        });
        console.log("           FORNECEDORES : ");
        fornecedores.forEach((forn) => {
            if (forn.idProduto === produto.idProduto) {
                console.log("           ID : " + forn.idFornecedor + " | NOME : " + forn.nome + " | NIF : " + forn.nif);
            }
        });
        console.log("");
    });
    console.log("TOTAL : " + total);
    console.log(`====================================`);
    console.log("");
    console.log("");
});
