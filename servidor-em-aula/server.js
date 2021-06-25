const express = require("express")
const app = express()

// importar o arquivo json de filmes
const filmes = require("./data/ghibli.json")
const { request, response } = require("express")
// definir rota principal

app.get("/",(request,response) =>{
    response.status(200).send("oi")
})

app.get("/filmes", (request,response) => {
    response.status(200).send(filmes)
})

// definir endpoint com id

app.get("/filmes/:id", (request,response) => {
    // entender qual id  o cliente está requerindo
    const idRequisitado = request.params.id
    console.log(idRequisitado)
    // entener o id de cada objeto da minha array
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado))
})

//definir porta para servidor local
app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})

