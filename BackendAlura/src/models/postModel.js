// Importa a função conectarAoBanco para estabelecer uma conexão com o banco de dados
// Essa função provavelmente está localizada no arquivo ./src/config/dbConfig.js
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
import 'dotenv/config';


// Conecta ao banco de dados de forma assíncrona usando a função `conectarAoBanco`
// Armazena a conexão estabelecida na constante `conexao`
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função que provavelmente está definida em outro lugar e recupera todos os posts do banco de dados
export async function getTodosPosts() {
    // Acessa o banco de dados usando a constante `conexao`
    const db = conexao.db("imersao-instabytes"); // "imersao-instabytes" é provavelmente o nome do banco de dados
  
    // Obtém a coleção chamada "posts" do banco de dados
    const colecao = db.collection("posts");
  
    // Utiliza o método `find().toArray()` para buscar todos os documentos da coleção
    // e retorna-os como um array
    return colecao.find().toArray();
  }


  export async function criarPost(novoPost) {
    
    // Acessa o banco de dados usando a constante `conexao`
    const db = conexao.db("imersao-instabytes"); // "imersao-instabytes" é provavelmente o nome do banco de dados
  
    // Obtém a coleção chamada "posts" do banco de dados
    const colecao = db.collection("posts");
  
    return colecao.insertOne(novoPost);
  }

  export async function atualizarNovoPost(id,novoPost) {
    
    // Acessa o banco de dados usando a constante `conexao`
    const db = conexao.db("imersao-instabytes"); // "imersao-instabytes" é provavelmente o nome do banco de dados
  
    // Obtém a coleção chamada "posts" do banco de dados
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
  }
  