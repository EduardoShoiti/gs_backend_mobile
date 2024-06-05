import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";
import path from "path";
import fs from "fs";

// Caminho absoluto para o diretório do banco de dados
const dbPath = path.resolve(__dirname, '../../database');

// Verificar se o diretório existe, caso contrário, criar
if (!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath, { recursive: true });
}

export function createDbConnection() {
    const db = new Database(path.join(dbPath, 'barreira.db'), OPEN_READWRITE | OPEN_CREATE, (err) => {
        if (err) {
            console.error("Erro ao conectar com o banco de dados:", err.message);
        } else {
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
