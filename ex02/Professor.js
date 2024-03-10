"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
class Professor {
    constructor(nome, email, idDisciplinas, turmas) {
        this._nome = nome;
        this._email = email;
        this._idDisciplinas = idDisciplinas;
        this._turmas = turmas;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get idDisciplinas() {
        return this._idDisciplinas;
    }
    set idDisciplinas(value) {
        this._idDisciplinas = value;
    }
    get turmas() {
        return this._turmas;
    }
    set turmas(value) {
        this._turmas = value;
    }
    toString() {
        return this._nome + " " + this._email;
    }
}
exports.Professor = Professor;
