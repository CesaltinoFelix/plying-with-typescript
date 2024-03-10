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
const promises_1 = require("fs/promises");
const Turma_1 = require("./Turma");
const dados_aluno_1 = require("./dados/dados.aluno");
const dados_professor_1 = require("./dados/dados.professor");
function salvarDados(dados) {
    return __awaiter(this, void 0, void 0, function* () {
        const turmas = yield lerDados();
        turmas.push(dados);
        const dadosString = JSON.stringify(turmas);
        try {
            yield (0, promises_1.writeFile)("./dados/dados.turma.json", dadosString);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function lerDados() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield (0, promises_1.readFile)("./dados/dados.turma.json");
            const turmas = JSON.parse(dados.toString());
            return turmas;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    });
}
function mostrarInformacao() {
    let turmas = lerDados();
    turmas.then((turmas) => {
        turmas.forEach((turma) => {
            console.log("=======================================================");
            console.log("ID: " + turma.id + " - " + "TURMA: " + turma.nome + " - " + "CLASSE: " + turma.classe + " - " + "CURSO: " + turma.curso);
            console.log("");
            console.log("           ALUNOS");
            turma.idAlunos.forEach((id) => {
                dados_aluno_1.alunos.forEach((aluno) => {
                    if (aluno.id == id) {
                        console.log(`           ${aluno.toString()}`);
                    }
                });
            });
            console.log("");
            console.log("                      PROFESSORES");
            dados_professor_1.professores.forEach((professor) => {
                professor.turmas.forEach((id) => {
                    if (id == turma.id) {
                        console.log(`                       ${professor.toString()}`);
                    }
                });
            });
            console.log("=======================================================");
            console.log("");
            console.log("");
            console.log("");
        });
    });
}
// const dados = new Turma(2, 'M12A', 11, 'Mecanica', [5, 6, 7]);
// salvarDados(dados).then(()=>{
//     mostrarInformacao();
// });
// const dados2 = new Turma(3, 'M12B', 11, 'Mecanica', [1, 2, 3]);
function dadosForm() {
    var _a, _b, _c, _d, _e;
    const id = Number((_a = document.getElementById("id")) === null || _a === void 0 ? void 0 : _a.value);
    const nome = (_b = document.getElementById("nome")) === null || _b === void 0 ? void 0 : _b.value;
    const classe = Number((_c = document.getElementById("classe")) === null || _c === void 0 ? void 0 : _c.value);
    const idAlunosForm = ((_d = document.getElementById("idAlunos")) === null || _d === void 0 ? void 0 : _d.value).split(',');
    const curso = (_e = document.getElementById("curso")) === null || _e === void 0 ? void 0 : _e.value;
    let idAlunos = [];
    console.log(`${id} - ${nome} - ${classe} - ${idAlunos} - ${curso}`);
    idAlunosForm.forEach((id) => {
        idAlunos.push(parseInt(id));
    });
    salvarDados(new Turma_1.Turma(id, nome, classe, curso, idAlunos));
    console.clear();
    mostrarInformacao();
}
mostrarInformacao();
