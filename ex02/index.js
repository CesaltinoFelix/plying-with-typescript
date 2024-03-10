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
// const dados = new Turma(1, 'TI11B', 11, 'Tecnico de Informatica', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// salvarDados(dados);
let turmas = lerDados();
turmas.then((turmas) => {
    console.log(turmas);
});
