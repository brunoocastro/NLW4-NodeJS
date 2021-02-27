// Importamos o express pra dentro deste arquivo
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

// Importando o Banco de dados
import "reflect-metadata";
import createConnection from "./database";

import { router } from "./routes";
import { AppError } from "./errors/AppError";

createConnection();

// Iniciou uma instancia do express
const app = express();

// Habilitando o uso de JSON no express
app.use(express.json());

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error ${err.message}`,
    });
  }
);

// Utilizando o router do arquivo externo
// para passar as rotas criadas
app.use(router);

export { app };
