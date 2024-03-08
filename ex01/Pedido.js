"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(id, listaProdutos, nome) {
        this.idPedido = id;
        this.listaProdutos = listaProdutos;
        this.nome = nome;
    }
}
exports.Pedido = Pedido;
