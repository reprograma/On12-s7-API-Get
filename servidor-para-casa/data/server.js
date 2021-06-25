const express = require("express")
const app = express()
const cidades = require("./estados-cidades.json")
const { request, response } = require("express")

 app.get("/cidades", (request,response) => {
    response.status(200).send(cidades)
})

app.get("/cidades/:sigla", (request,response) => {
    const siglaRequisitada = request.params.sigla
    console.log(siglaRequisitada)
    response.status(200).send(cidades.find(siglas => siglas.sigla == siglaRequisitada))
})

app.listen(3000, () =>{
    console.log("Rodando o servidor 'para casa' na porta 3000")
})