"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(id, nome, idade, matricula) {
        this._id = id;
        this._nome = nome;
        this._idade = idade;
        this._matricula = matricula;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        this._idade = value;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }
    toString() {
        return `${this._id} - ${this._nome} - ${this._idade} - ${this._matricula}`;
    }
}
exports.Aluno = Aluno;
