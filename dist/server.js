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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Usuario_1 = require("./models/Usuario");
const Barreira_1 = require("./models/Barreira");
const database_1 = require("./config/database");
const usuario_repository_1 = require("./repositories/usuario.repository");
const barreira_repository_1 = require("./repositories/barreira.repository");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3333;
const db = (0, database_1.createDbConnection)();
const usuarioRepository = new usuario_repository_1.UsuarioRepository(db);
const barreiraRepository = new barreira_repository_1.BarreiraRepository(db);
// Rotas para Usuario
// Criar usuário
app.post('/usuarios', (request, response) => {
    try {
        const { email, senha, qtdLimpezaBarreira } = request.body;
        const usuario = new Usuario_1.Usuario(email, senha, qtdLimpezaBarreira);
        usuarioRepository.insert(usuario);
        return response.status(201).json(usuario);
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});
// Listar todos os usuários
app.get('/usuarios', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuarioRepository.findAll();
        return response.status(200).json({ usuarios });
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
}));
// Obter um usuário pelo ID
app.get('/usuarios/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const usuario = yield usuarioRepository.findOne(Number(id));
        if (usuario) {
            return response.status(200).json(usuario);
        }
        else {
            return response.status(404).json({ message: "Usuário não encontrado" });
        }
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
}));
// Atualizar um usuário pelo ID
app.put('/usuarios/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { email, senha, qtdLimpezaBarreira } = request.body;
        const usuario = new Usuario_1.Usuario(email, senha, qtdLimpezaBarreira, Number(id));
        usuarioRepository.update(usuario);
        return response.status(204).send();
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});
// Deletar um usuário pelo ID
app.delete('/usuarios/:id', (request, response) => {
    try {
        const { id } = request.params;
        usuarioRepository.delete(Number(id));
        return response.status(204).send();
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});
// Rotas para Barreira
// Criar barreira
app.post('/barreiras', (request, response) => {
    try {
        const { localizacao, capacidadeMax, DataCapacidade, id_usuario } = request.body;
        const barreira = new Barreira_1.Barreira(localizacao, capacidadeMax, DataCapacidade, id_usuario);
        barreiraRepository.insert(barreira);
        return response.status(201).json(barreira);
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});
// Listar todas as barreiras
app.get('/barreiras', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const barreiras = yield barreiraRepository.findAll();
        return response.status(200).json({ barreiras });
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
}));
// Obter uma barreira pelo ID
app.get('/barreiras/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const barreira = yield barreiraRepository.findOne(Number(id));
        if (barreira) {
            return response.status(200).json(barreira);
        }
        else {
            return response.status(404).json({ message: "Barreira não encontrada" });
        }
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
}));
// Atualizar uma barreira pelo ID
app.put('/barreiras/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { localizacao, capacidadeMax, DataCapacidade, id_usuario } = request.body;
        const barreira = new Barreira_1.Barreira(localizacao, capacidadeMax, DataCapacidade, id_usuario, Number(id));
        barreiraRepository.update(barreira);
        return response.status(204).send();
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});
// Deletar uma barreira pelo ID
app.delete('/barreiras/:id', (request, response) => {
    try {
        const { id } = request.params;
        barreiraRepository.delete(Number(id));
        return response.status(204).send();
    }
    catch (error) {
        return response.status(500).json({ message: "Houve um erro inesperado" });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
