

const express = require("express")
const app = express()

const estados = require("./data/estados-cidades.json")

app.get("/", (requeste,response) => {
    response.status(200).send("Testando")
})

app.get("/estados", (request,response) => {
    response.status(200).send(estados)
})

app.get("/estados/:sigla", (request,response) => {
    const mostrarSigla = request.params.sigla
    console.log(mostrarSigla)
    

    response.status(200).send(estados.find(estado => estado.sigla == mostrarSigla))
})



app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000")
})
