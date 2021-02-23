// Importando o Banco de dados
import 'reflect-metadata';
import "./database"

// Importamos o express pra dentro deste arquivo
import express from 'express';
import { router } from './routes';

// Iniciou uma instancia do express
const app = express();

// Habilitando o uso de JSON no express
app.use(express.json());

// Utilizando o router do arquivo externo
// para passar as rotas criadas
app.use(router);

// Criando o servidor na porta 3333
// Acessar pelo link: localhost:3333
app.listen(3333, () => console.log("Server running!"));