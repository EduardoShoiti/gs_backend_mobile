import express, { Request, Response } from 'express';
import { Usuario } from './models/Usuario';
import { Barreira } from './models/Barreira';
import { createDbConnection } from './config/database';
import { UsuarioRepository } from './repositories/usuario.repository';
import { BarreiraRepository } from './repositories/barreira.repository';
import cors from 'cors';

interface UsuarioRequestBody {
    email: string;
    senha: string;
    qtdLimpezaBarreira: number;
}

interface BarreiraRequestBody {
    localizacao: string;
    capacidadeMax: number;
    DataCapacidade: string;
    id_usuario: number;
}

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3333;

const db = createDbConnection();

const usuarioRepository = new UsuarioRepository(db);
const barreiraRepository = new BarreiraRepository(db);

// Rotas para Usuario

// Criar usuário
app.post('/usuarios', (request: Request, response: Response) => {
    try {
        const { email, senha, qtdLimpezaBarreira } = request.body as UsuarioRequestBody;
        const usuario = new Usuario(email, senha, qtdLimpezaBarreira);
    
        usuarioRepository.insert(usuario);

        return response.status(201).json(usuario);
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Listar todos os usuários
app.get('/usuarios', async (request: Request, response: Response) => {
    try {
        const usuarios = await usuarioRepository.findAll();

        return response.status(200).json({ usuarios });
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Obter um usuário pelo ID
app.get('/usuarios/:id', async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const usuario = await usuarioRepository.findOne(Number(id));

        if (usuario) {
            return response.status(200).json(usuario);
        } else {
            return response.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Atualizar um usuário pelo ID
app.put('/usuarios/:id', (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { email, senha, qtdLimpezaBarreira } = request.body as UsuarioRequestBody;
        const usuario = new Usuario(email, senha, qtdLimpezaBarreira, Number(id));
    
        usuarioRepository.update(usuario);

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Deletar um usuário pelo ID
app.delete('/usuarios/:id', (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        usuarioRepository.delete(Number(id));

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Rotas para Barreira

// Criar barreira
app.post('/barreiras', (request: Request, response: Response) => {
    try {
        const { localizacao, capacidadeMax, DataCapacidade, id_usuario } = request.body as BarreiraRequestBody;
        const barreira = new Barreira(localizacao, capacidadeMax, DataCapacidade, id_usuario);

        barreiraRepository.insert(barreira);

        return response.status(201).json(barreira);
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Listar todas as barreiras
app.get('/barreiras', async (request: Request, response: Response) => {
    try {
        const barreiras = await barreiraRepository.findAll();

        return response.status(200).json({ barreiras });
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Obter uma barreira pelo ID
app.get('/barreiras/:id', async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const barreira = await barreiraRepository.findOne(Number(id));

        if (barreira) {
            return response.status(200).json(barreira);
        } else {
            return response.status(404).json({ message: "Barreira não encontrada" });
        }
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Atualizar uma barreira pelo ID
app.put('/barreiras/:id', (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { localizacao, capacidadeMax, DataCapacidade, id_usuario } = request.body as BarreiraRequestBody;
        const barreira = new Barreira(localizacao, capacidadeMax, DataCapacidade, id_usuario, Number(id));
    
        barreiraRepository.update(barreira);

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

// Deletar uma barreira pelo ID
app.delete('/barreiras/:id', (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        barreiraRepository.delete(Number(id));

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
