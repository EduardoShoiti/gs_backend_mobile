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
exports.UsuarioRepository = void 0;
class UsuarioRepository {
    constructor(db) {
        this.db = db;
    }
    insert(usuario) {
        const sql = 'INSERT INTO Usuario (email, senha, qtdLimpezaBarreira) VALUES (?, ?, ?)';
        const params = [usuario.email, usuario.senha, usuario.qtdLimpezaBarreira];
        this.db.run(sql, params, function (err) {
            if (err) {
                console.error('Erro ao inserir usuário:', err.message);
            }
            else {
                usuario.id = this.lastID; // Atribui o ID gerado pelo banco de dados
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db.all('SELECT * FROM Usuario', [], (err, rows) => {
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
                this.db.get('SELECT * FROM Usuario WHERE id = ?', [id], (err, row) => {
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
    update(usuario) {
        const sql = 'UPDATE Usuario SET email = ?, senha = ?, qtdLimpezaBarreira = ? WHERE id = ?';
        const params = [usuario.email, usuario.senha, usuario.qtdLimpezaBarreira, usuario.id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao atualizar usuário:', err.message);
            }
        });
    }
    delete(id) {
        const sql = 'DELETE FROM Usuario WHERE id = ?';
        const params = [id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao deletar usuário:', err.message);
            }
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
