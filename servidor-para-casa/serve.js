
const express = require("express")////importando o express p o doc
const app = express()//instanciando o express

const estados = require("./data/estados-cidades.json")// importart o arquivo json de estados

app.get("/", (request, response) => { //definir rota principal
    response.status(200).send({"mensagem": "bem vindxs!"})

})

app.get("/estados/todos", (request, response) => {///definindo a estados/todos
    response.status(200).send(estados)

})

app.get("/estados/filtro", (request, response) => {

    const siglaRequisitado = request.query.sigla
   
    //console.log(siglaRequisitado)

    response.status(200).json(estados.find(estado => estado.sigla == siglaRequisitado))

})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})