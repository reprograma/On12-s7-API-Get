const express = require("express")
const app = express()

const estados = require("./data/estados-cidades.json")

app.get("/", (request, response) => {
    response.status(200).send({ "mensagem": "Seja bem vinda! <3" })
})

app.get("/estados", (request, response) => { 
    response.status(200).send(estados) 
})

app.get("/estados/:sigla", (request, response) => {
    const siglaRequisitada = request.params.sigla
    console.log(siglaRequisitada)

    response.status(200).send(estados.find(estado => estado.sigla == siglaRequisitada))
})

app.listen(6060, () => {
    console.log("Servidor rodando na porta 6060")
})

