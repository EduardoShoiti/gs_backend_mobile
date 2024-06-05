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
exports.BarreiraRepository = void 0;
class BarreiraRepository {
    constructor(db) {
        this.db = db;
    }
    insert(barreira) {
        const sql = 'INSERT INTO Barreira (localizacao, capacidadeMax, DataCapacidade, id_usuario) VALUES (?, ?, ?, ?)';
        const params = [barreira.localizacao, barreira.capacidadeMax, barreira.DataCapacidade, barreira.id_usuario];
        this.db.run(sql, params, function (err) {
            if (err) {
                console.error('Erro ao inserir barreira:', err.message);
            }
            else {
                barreira.id = this.lastID; // Atribui o ID gerado pelo banco de dados
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db.all('SELECT * FROM Barreira', [], (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db.get('SELECT * FROM Barreira WHERE id = ?', [id], (err, row) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(row);
                    }
                });
            });
        });
    }
    update(barreira) {
        const sql = 'UPDATE Barreira SET localizacao = ?, capacidadeMax = ?, DataCapacidade = ?, id_usuario = ? WHERE id = ?';
        const params = [barreira.localizacao, barreira.capacidadeMax, barreira.DataCapacidade, barreira.id_usuario, barreira.id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao atualizar barreira:', err.message);
            }
        });
    }
    delete(id) {
        const sql = 'DELETE FROM Barreira WHERE id = ?';
        const params = [id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao deletar barreira:', err.message);
            }
        });
    }
}
exports.BarreiraRepository = BarreiraRepository;
