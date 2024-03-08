"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
function info(pedidos, produtos, fornecedores) {
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
}
exports.info = info;
