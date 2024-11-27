import express from "express";
import multer from "multer";
import { atualizarPost, listarPosts, postarPost, uploadImagem } from "../controllers/postController.js";
import cors from "cors"

const corsOptions = {
    origin:"http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) =>{
    // Registra um middleware com o aplicativo Express
    // Esse middleware analisa dados JSON enviados no corpo da requisição
    // e os torna acessíveis através do objeto `req.body` nas funções das rotas
    app.use(express.json());
    app.use(cors(corsOptions))
    // Manipulador de rota para requisições GET ao endpoint "/posts"
    // Essa função recupera todos os posts do banco de dados e os envia como dados JSON na resposta
    app.get("/posts", listarPosts)

    app.post("/posts", postarPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarPost)
}

export default routes;
