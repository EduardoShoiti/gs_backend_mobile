"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(email, senha, qtdLimpezaBarreira, id) {
        this.email = email;
        this.senha = senha;
        this.qtdLimpezaBarreira = qtdLimpezaBarreira;
        if (id) {
            this.id = id;
        }
        else {
            this.id = 0; // O valor do ID será definido pelo banco de dados
        }
    }
}
exports.Usuario = Usuario;
