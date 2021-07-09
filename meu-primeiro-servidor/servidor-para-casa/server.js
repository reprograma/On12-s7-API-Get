

const estados = require("./data/estados-cidades.json");// importando meu arquivo json dos estados
const express = require("express")
const app = express()




app.get("/estados/todos", (request,response) => {

    response.status(200).send(estados)
            
}) 



app.get("/estados/:sigla", (request, response) => {
   
        const  siglaEstado = estados.find(estado => estado.sigla === sigla);
        response.status(200).send(siglaEstado)
    
})


app.listen(3000, () => {
    console.log('Servidor rodando perfeitamente na porta 3000')
})