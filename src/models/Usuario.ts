export class Usuario {
    public id: number;
    public email: string;
    public senha: string;
    public qtdLimpezaBarreira: number;

    constructor(
        email: string,
        senha: string,
        qtdLimpezaBarreira: number,
        id?: number
    ) {
        this.email = email;
        this.senha = senha;
        this.qtdLimpezaBarreira = qtdLimpezaBarreira;
        if (id) {
            this.id = id;
        } else {
            this.id = 0; // O valor do ID será definido pelo banco de dados
        }
    }
}
