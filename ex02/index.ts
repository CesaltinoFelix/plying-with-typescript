import { readFile, writeFile } from "fs/promises";
import { Turma } from "./Turma";

async function salvarDados(dados: Turma) {
  const turmas: Turma[] = await lerDados();
  turmas.push(dados);
  const dadosString = JSON.stringify(turmas);
  try {
    await writeFile("./dados/dados.turma.json", dadosString);
  } catch (error) {
    console.log(error);
  }
}

async function lerDados(): Promise<Turma[]> {
  try {
    const dados = await readFile("./dados/dados.turma.json");
    const turmas = JSON.parse(dados.toString());
    return turmas;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// const dados = new Turma(1, 'TI11B', 11, 'Tecnico de Informatica', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// salvarDados(dados);

let turmas: Promise<Turma[]> = lerDados();
turmas.then((turmas) => {
    console.log(turmas);
})