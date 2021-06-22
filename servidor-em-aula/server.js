// Criou o arquivo do servidor
// npm init
// instalou express
// instalou nodemon
// atualizou o script do npm start

const express = require("express") // importando o express para o documento
const app = express() // instanciando o express

// importar o arquivo json de filmes
const filmes = require("./data/ghibli.json")

// definir rota principal

app.get("/", (request, response) => {
    response.status(200).send({ "mensagem": "Salve! <3" })
})

app.get("/filmes", (request, response) => { // definindo a rota /filmes
    response.status(200).send(filmes) // enviando os filmes como resposta
})

// definir um endpoint para filtrar filmes pelo titulo, usando query params
app.get("/filmes/filtro", (request, response) => {
    const tituloRequisitado = request.query.titulo //recebendo request acessando as query enviadas e aceitando somente aquela chave titulo
    //ARRAY.find(ELEMENTO => titulo dentro de ELEMENTO tem que ser igual ao titulo requisitado) ele retorna o primeiro que encontrar
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})

// definir um endpoint com id para filtrar filmes pelo id, usando path params
app.get("/filmes/:identificao", (request, response) => {
    // entender qual id o cliente está requerindo
    const idRequisitado = request.params.identificao
    console.log(idRequisitado)

    // entender o id de cada objeto da minha array
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado))
})


// definir uma porta para o servidor local
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

