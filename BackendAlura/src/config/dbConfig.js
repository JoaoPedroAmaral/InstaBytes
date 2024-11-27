import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try{
        mongoClient = new MongoClient (stringConexao);
        console.log('conectando ao cluster do bd');
        await mongoClient.connect();
        console.log('Conectando ao MongoDB Atlas com o servidor');

        return mongoClient;
    }catch(erro){
        console.log('falha na conexao com o banco!');
        process.exit();
    }
}