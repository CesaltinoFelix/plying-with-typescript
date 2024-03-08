import { Produto } from "./Produto";
import { Fornecedor } from "./Fornecedor";
import { Pedido } from "./Pedido";
import { readFile, writeFile } from "fs/promises";
import { info } from "./info";

const produtos: Produto[] = [
  new Produto(1, "Arroz", 22000),
  new Produto(2, "Açucar", 18000),
  new Produto(3, "Massa", 15000),
  new Produto(4, "Feijão", 29000),
];

const fornecedores: Fornecedor[] = [
  new Fornecedor(1, "Cesaltino Felix", "007242560LA046", 1),
  new Fornecedor(2, "Marcia Kimbamba", "007242560LA042", 1),
  new Fornecedor(1, "Cesaltino Felix", "007242560LA046", 2),
  new Fornecedor(1, "Cesaltino Felix", "007242560LA046", 3),
  new Fornecedor(1, "Marcia Kimbamba", "007242560LA042", 4),
];

async function lerPedidos(): Promise<Pedido[]> {
  const dados = await readFile("./dados.json");
  try {
    return JSON.parse(dados.toString());
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function salvarPedido(pedido: Pedido): Promise<boolean> {
  try{
    const pedidos = await lerPedidos();
    pedidos.push(pedido);
    await writeFile("./dados.json", JSON.stringify(pedidos));
    return true;
  } catch(error){
    console.log("erro: " + error);
    return false;
  }
}

// const pedido = new Pedido(2, [{ idProduto: 1, qtd: 2 }], "Fernando Felix");
// salvarPedido(pedido).then( salvo => {
//   if (salvo) console.log("Pedido salvo com sucesso!");
//   else console.log("Falha ao salvar pedido!");
// });

const pedidos: Promise<Pedido[]> = lerPedidos();
pedidos.then((pedidos) => {
  info(pedidos, produtos, fornecedores);
});
