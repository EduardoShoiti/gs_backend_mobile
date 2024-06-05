"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDbConnection = void 0;
const sqlite3_1 = require("sqlite3");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Caminho absoluto para o diretório do banco de dados
const dbPath = path_1.default.resolve(__dirname, '../../database');
// Verificar se o diretório existe, caso contrário, criar
if (!fs_1.default.existsSync(dbPath)) {
    fs_1.default.mkdirSync(dbPath, { recursive: true });
}
function createDbConnection() {
    const db = new sqlite3_1.Database(path_1.default.join(dbPath, 'barreira.db'), sqlite3_1.OPEN_READWRITE | sqlite3_1.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Erro ao conectar com o banco de dados:", err.message);
        }
        else {
            console.log("Conexão com o SQLite foi estabelecida");
        }
    });
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS Usuario (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT,
                senha TEXT,
                qtdLimpezaBarreira INTEGER
            )
        `);
        db.run(`
            CREATE TABLE IF NOT EXISTS Barreira (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                localizacao TEXT,
                capacidadeMax REAL,
                DataCapacidade TEXT,
                id_usuario INTEGER,
                FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
            )
        `);
    });
    return db;
}
exports.createDbConnection = createDbConnection;
