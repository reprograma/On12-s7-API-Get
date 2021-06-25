
// abre o git bash 
// vai para a pasta onde você quer desenvolver o projeto
// touch server.js - cria a pasta server.js no local
// npm init - cria o arquivo package json
// npm i express - instala os pacotes
// npm i nodemon

const { response, request } = require('express')
const express = require('express')
const app = express() // instanciando express(colocando ele disponivel no arquivo)

//importando arquivo da pasta local
const filmes = require('./data/ghibli.json')


//mensagem de retorno ao acessar a localhost
app.get('/', (req, res) => {
res.status(200).send('Salve! <3')
})


//importando o JSON dos filmes  na rota e tendo o json como retorno
app.get('/filmes', (req, res) => { 
    res.status(200).send(filmes)
})


//definir um endpoint com id

app.get('/filmes/:identificacao', (request, response) => {
    //parte 1 = entender qual id o usuario esta tentando acessar
    const idRequisitado = request.params.identificacao
    console.log(idRequisitado)

    //parte 2 = entender o id de cada obj da minha array
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado))
})


//AQUI IDENTIFICA Q O SERVIDOR ESTÁ ATIVO na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
}) 




