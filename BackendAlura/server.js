// Importa o framework Express para criar aplicações web e APIs
import express from "express";
import routes from "./src/routes/postRoutes.js";

// Cria uma instância do aplicativo Express
// Esse objeto `app` será usado para definir rotas, middlewares e manipular requisições
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor Express e escuta por requisições na porta 3000
// Quando o servidor estiver escutando, imprime uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

