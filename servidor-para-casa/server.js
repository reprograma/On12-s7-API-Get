const { response } = require("express")
const express = require("express")
const app = express()

// Retorna lista completa de estados-cidades

const estados = require("./data/estados-cidades.json")

app.get("/estados", (request, response) => {
    response.status(200).send(estados)
})

// Retorna nome, sigla e cidades de uma sigla especifica

app.get("/estados/:sigla", (request, response) => {
    const siglaRequisitada = request.params.sigla
    console.log(siglaRequisitada)

    response.status(200).send(estados.find(siglaEscolhida=>siglaEscolhida.sigla == siglaRequisitada))
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})