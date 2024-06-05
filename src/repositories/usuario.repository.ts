import { Database } from 'sqlite3';
import { Usuario } from '../models/Usuario';

export class UsuarioRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public insert(usuario: Usuario) {
        const sql = 'INSERT INTO Usuario (email, senha, qtdLimpezaBarreira) VALUES (?, ?, ?)';
        const params = [usuario.email, usuario.senha, usuario.qtdLimpezaBarreira];
        this.db.run(sql, params, function (err) {
            if (err) {
                console.error('Erro ao inserir usuário:', err.message);
            } else {
                usuario.id = this.lastID; // Atribui o ID gerado pelo banco de dados
            }
        });
    }

    public async findAll(): Promise<Usuario[]> {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM Usuario', [], (err, rows: Usuario[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    public async findOne(id: number): Promise<Usuario | undefined> {
        return new Promise((resolve, reject) => {
            this.db.get('SELECT * FROM Usuario WHERE id = ?', [id], (err, row: Usuario) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    public update(usuario: Usuario) {
        const sql = 'UPDATE Usuario SET email = ?, senha = ?, qtdLimpezaBarreira = ? WHERE id = ?';
        const params = [usuario.email, usuario.senha, usuario.qtdLimpezaBarreira, usuario.id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao atualizar usuário:', err.message);
            }
        });
    }

    public delete(id: number) {
        const sql = 'DELETE FROM Usuario WHERE id = ?';
        const params = [id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao deletar usuário:', err.message);
            }
        });
    }
}
