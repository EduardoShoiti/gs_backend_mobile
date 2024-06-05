"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barreira = void 0;
class Barreira {
    constructor(localizacao, capacidadeMax, DataCapacidade, id_usuario, id) {
        this.localizacao = localizacao;
        this.capacidadeMax = capacidadeMax;
        this.DataCapacidade = DataCapacidade;
        this.id_usuario = id_usuario;
        if (id) {
            this.id = id;
        }
        else {
            this.id = 0; // O valor do ID será definido pelo banco de dados
        }
    }
}
exports.Barreira = Barreira;
