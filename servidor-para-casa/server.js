
const { response } = require('express')
const express = require('express')
const app = express()

const estadosCidade = require('./data/estados-cidades.json')

app.get('/', (request, response) => {
    response.status(200).send('Eaeeeeeeeeee')
})

//JSON com tudo
app.get('/estadosCidade', (request, response)=> {
    response.status(200).send(estadosCidade)
})

app.get('/estadosCidade/:siglas', (request, response) => {
    const cidadeSigla = request.params.siglas
    console.log(cidadeSigla)
    response.status(200).send(estadosCidade.find(siglas => siglas.sigla === cidadeSigla))
})

app.listen(3000, () => {
    console.log('Tudo Ok!')
})