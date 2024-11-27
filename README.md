# Projeto: Gerenciamento de Posts com API de Geração de Conteúdo (Gemini)
### Descrição:
Este projeto é uma aplicação de backend que gerencia posts com imagens, utilizando a API do Google Gemini para gerar descrições automáticas baseadas no conteúdo das imagens. Ele permite o upload de imagens, a atualização de descrições e o gerenciamento de posts no banco de dados.

---

### Funcionalidades:
- <b>Upload de Imagens:</b> Armazena imagens enviadas pelo usuário em um diretório local.
- <b>Geração Automática de Descrições:</b> Usa a API Gemini para gerar descrições com base nas imagens.
- <b>Atualização de Posts:</b> Atualiza posts com novas descrições e imagens.
- <b>Armazenamento de Dados:</b> Salva os detalhes dos posts no banco de dados.

---

### Tecnologias Utilizadas:
- <b>Node.js:</b> Plataforma de execução JavaScript para backend.
- <b>Express:</b> Framework para construção de APIs.
- <b>Multer:</b> Middleware para upload de arquivos.
- <b>Google Generative AI API:</b> Serviço usado para gerar descrições automáticas.
- <b>Sharp (opcional):</b> Biblioteca para processamento de imagens (conversão para PNG, redimensionamento, etc.).
- <b>MySQL:</b> Banco de dados relacional para armazenamento de informações dos posts.

---
### Pré-requisitos:
Antes de começar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- MySQL (ou outra alternativa compatível)
- Conta com acesso à API do Google Gemini (incluindo a chave de API)


Projeto: Gerenciamento de Posts com API de Geração de Conteúdo (Gemini)
Descrição
Este projeto é uma aplicação de backend que gerencia posts com imagens, utilizando a API do Google Gemini para gerar descrições automáticas baseadas no conteúdo das imagens. Ele permite o upload de imagens, a atualização de descrições e o gerenciamento de posts no banco de dados.

Funcionalidades
Upload de Imagens: Armazena imagens enviadas pelo usuário em um diretório local.
Geração Automática de Descrições: Usa a API Gemini para gerar descrições com base nas imagens.
Atualização de Posts: Atualiza posts com novas descrições e imagens.
Armazenamento de Dados: Salva os detalhes dos posts no banco de dados.
Tecnologias Utilizadas
Node.js: Plataforma de execução JavaScript para backend.
Express: Framework para construção de APIs.
Multer: Middleware para upload de arquivos.
Google Generative AI API: Serviço usado para gerar descrições automáticas.
Sharp (opcional): Biblioteca para processamento de imagens (conversão para PNG, redimensionamento, etc.).
MySQL: Banco de dados relacional para armazenamento de informações dos posts.
Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão 18 ou superior)
MySQL (ou outra alternativa compatível)
Conta com acesso à API do Google Gemini (incluindo a chave de API)

---

### Instalação:
#### Clone o repositório:

```git clone https://github.com/JoaoPedroAmaral/BackEnd-InstaBytes.git```

```cd BackEnd-InstaBytes```

#### Instale as dependências:

```npm install package.json```

### Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

`STRING_CONEXAO=sua-conexao
GEMINI_API_KEY=sua-chave-da-api-gemini`

### Inicie o servidor:

`npm run dev`

---

### Endpoints da API
#### POST /upload
Descrição: Faz o upload de uma imagem para o servidor.
Parâmetros: Arquivo enviado no formato multipart/form-data.
Resposta: Retorna o ID do post criado.

#### PUT /post/:id
Descrição: Atualiza um post existente com uma nova descrição gerada pela API Gemini.
Parâmetros:

:id - ID do post.
alt - Texto alternativo para a imagem.
Resposta: Retorna o post atualizado.

---

### Estrutura do Projeto

```plaintext
├── src
│   ├── controllers
│   │   ├── postController.js
│   ├── services
│   │   ├── geminiService.js
│   ├── routes
│   │   ├── postRoutes.js
│   ├── database
│   │   ├── db.js
│   └── app.js
├── uploads
│   └── (imagens enviadas)
├── .env
├── package.json
└── README.md
```

---

### Erros Comuns e Soluções
#### 1. "Provided image is not valid"
Descrição: A API Gemini não aceitou o buffer da imagem enviado.
Solução: Certifique-se de que a imagem é válida, que o buffer está preenchido e no formato correto (PNG).
#### 2. "File not found"
Descrição: O caminho especificado para a imagem não existe.
Solução: Verifique se o upload foi feito corretamente e se o ID da imagem está correto.
Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e correções!