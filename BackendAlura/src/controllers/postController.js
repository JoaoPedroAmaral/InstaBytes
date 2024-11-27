import { getTodosPosts, criarPost, atualizarNovoPost } from "../models/postModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js"

export async function listarPosts (req, res){
    // Chama a função `getTodosPosts` para recuperar todos os posts
    const posts = await getTodosPosts();

    // Define o código de status da resposta para 200 (indicando sucesso)
    res.status(200);

    // Envia os posts recuperados como dados JSON no corpo da resposta
    res.json(posts);
};

export async function postarPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"ERRO":"falha na requisição"});

    }
}


export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt:""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"ERRO":"falha na requisição"});

    }
}

export async function atualizarPost(req, res) {
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imageBuffer)

        const post = { 
            imgUrl: urlImg,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarNovoPost(id, post);

        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"ERRO":"falha na requisição"});

    }
}