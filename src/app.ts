// Importando o Banco de dados
import 'reflect-metadata';
import createConnection from "./database"

// Importamos o express pra dentro deste arquivo
import express from 'express';
import { router } from './routes';

createConnection()

// Iniciou uma instancia do express
const app = express();

// Habilitando o uso de JSON no express
app.use(express.json());

// Utilizando o router do arquivo externo
// para passar as rotas criadas
app.use(router);

export { app }