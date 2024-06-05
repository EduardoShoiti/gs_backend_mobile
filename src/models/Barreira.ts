export class Barreira {
    public id: number;
    public localizacao: string;
    public capacidadeMax: number;
    public DataCapacidade: string;
    public id_usuario: number;

    constructor(
        localizacao: string,
        capacidadeMax: number,
        DataCapacidade: string,
        id_usuario: number,
        id?: number
    ) {
        this.localizacao = localizacao;
        this.capacidadeMax = capacidadeMax;
        this.DataCapacidade = DataCapacidade;
        this.id_usuario = id_usuario;
        if (id) {
            this.id = id;
        } else {
            this.id = 0; // O valor do ID será definido pelo banco de dados
        }
    }
}
