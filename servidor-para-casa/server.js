const express = require('express')
const app = express()
const estados = require("./data/estados-cidades.json")

app.get("/estados/todos", (request, response)=>{ 
     response
    .status(200)
    .send( estados.map(estado => {
        let estados_e_cidades = {mensagem: "Estado e suas respectivas cidades:",
        nome: estado.nome, cidades: estado.cidades}
        return estados_e_cidades
    }))
})

app.get("/estados/:sigla", (request, response)=>{
    let siglaRequerida = request.params.sigla.toLocaleUpperCase()
    console.log(siglaRequerida);
    response.status(200).send(estados.find(estado=> estado.sigla == siglaRequerida))
})

app.listen(3000, ()=>{ console.log("Servidor rodando na porta 3000.")})