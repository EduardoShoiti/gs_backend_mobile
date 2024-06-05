import { Database } from 'sqlite3';
import { Barreira } from '../models/Barreira';

export class BarreiraRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public insert(barreira: Barreira) {
        const sql = 'INSERT INTO Barreira (localizacao, capacidadeMax, DataCapacidade, id_usuario) VALUES (?, ?, ?, ?)';
        const params = [barreira.localizacao, barreira.capacidadeMax, barreira.DataCapacidade, barreira.id_usuario];
        this.db.run(sql, params, function (err) {
            if (err) {
                console.error('Erro ao inserir barreira:', err.message);
            } else {
                barreira.id = this.lastID; // Atribui o ID gerado pelo banco de dados
            }
        });
    }

    public async findAll(): Promise<Barreira[]> {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM Barreira', [], (err, rows: Barreira[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    public async findOne(id: number): Promise<Barreira | undefined> {
        return new Promise((resolve, reject) => {
            this.db.get('SELECT * FROM Barreira WHERE id = ?', [id], (err, row: Barreira) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    public update(barreira: Barreira) {
        const sql = 'UPDATE Barreira SET localizacao = ?, capacidadeMax = ?, DataCapacidade = ?, id_usuario = ? WHERE id = ?';
        const params = [barreira.localizacao, barreira.capacidadeMax, barreira.DataCapacidade, barreira.id_usuario, barreira.id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao atualizar barreira:', err.message);
            }
        });
    }

    public delete(id: number) {
        const sql = 'DELETE FROM Barreira WHERE id = ?';
        const params = [id];
        this.db.run(sql, params, (err) => {
            if (err) {
                console.error('Erro ao deletar barreira:', err.message);
            }
        });
    }
}
