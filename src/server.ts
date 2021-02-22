// Importamos o express pra dentro deste arquivo
import express from 'express';

// Iniciou uma instancia do express
const app = express();

// Definindo o metodo get para a rota 
// localhost:3333/
app.get("/", (request, response) => {
  return response.json({message: "Hello World - NLW #04"});
})

// Definindo o metodo post para a rota 
// localhost:3333/
app.get("/twitch", (request, response) => {
  return response.json({
    message: "Siga o canal do Tonelive na twitch", 
    link: "https://www.twitch.tv/tonelive"});
})

// Definindo o metodo post para a rota 
// localhost:3333/
app.post("/", (request, response) => {
  return response.json({message: "Os dados foram salvos com sucesso!"});
})



// Criando o servidor na porta 3333
// Acessar pelo link: localhost:3333
app.listen(3333, () => console.log("Server running!"));