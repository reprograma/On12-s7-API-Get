// É NECESSÁRIO DAR "npm start" PARA QUE O SERVIDOR RODE NO NAVEGADOR


// importando package "express"
const express = require("express")


// importando database
const states = require("./data/estados-cidades.json")


// instanciando a "const express" -> assim poderemos usar as ferramentas do package "express"
const app = express()

// primeiro "endpoint" do endereço -> padrão
app.get("/", (req, res) => {
    console.log("Teste ");
    res.status(200).send("Estados do Brasil")
})


// "endpoint" que apresenta todo todos os estados
app.get("/estados/todos", (req, res) => {
    res.status(200).send(states)
})


// "endpoint" que filtra os estados por nome
// precisa vir antes do params
app.get("/estados/nome", (req, res) => {
    const nomeResquest = req.query.nome
    console.log(nomeResquest)

    res.status(200).send(states.find(state => state.nome === nomeResquest))
})


// "endpoint" que filtra os estados por sigla
app.get("/estados/:sigla", (req, res) => {
    const siglaRequest = req.params.sigla
    console.log(siglaRequest);

    res.status(200).send(states.find(state => state.sigla === siglaRequest))
})


// definindo uma porta para rodar nosso local host
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
