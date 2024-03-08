"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
const Fornecedor_1 = require("./Fornecedor");
const Pedido_1 = require("./Pedido");
const promises_1 = require("fs/promises");
const info_1 = require("./info");
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
/*
const pedidos: Pedido[] = [
  new Pedido(
    1,
    [
      { idProduto: 1, qtd: 2 },
      { idProduto: 2, qtd: 1 },
    ],
    "Fernando Felix"
  ),
  new Pedido(
    2,
    [
      { idProduto: 1, qtd: 2 },
      { idProduto: 2, qtd: 1 },
      { idProduto: 3, qtd: 1 },
    ],
    "Francisca Felix"
  ),
  new Pedido(
    3,
    [
      { idProduto: 1, qtd: 2 },
      { idProduto: 2, qtd: 1 },
      { idProduto: 3, qtd: 3 },
      { idProduto: 4, qtd: 5 },
    ],
    "Marcia Felix"
  ),
];
*/
function lerPedidos() {
    return __awaiter(this, void 0, void 0, function* () {
        const dados = yield (0, promises_1.readFile)("./dados.json");
        try {
            return JSON.parse(dados.toString());
        }
        catch (error) {
            console.log(error);
            return [];
        }
    });
}
function salvarPedido(pedido) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pedidos = yield lerPedidos();
            pedidos.push(pedido);
            yield (0, promises_1.writeFile)("./dados.json", JSON.stringify(pedidos));
            return true;
        }
        catch (error) {
            console.log("erro: " + error);
            return false;
        }
    });
}
const pedido = new Pedido_1.Pedido(2, [{ idProduto: 1, qtd: 2 }], "Fernando Felix");
salvarPedido(pedido).then(salvo => {
    if (salvo)
        console.log("Pedido salvo com sucesso!");
    else
        console.log("Falha ao salvar pedido!");
});
const pedidos = lerPedidos();
pedidos.then((pedidos) => {
    (0, info_1.info)(pedidos, produtos, fornecedores);
});
