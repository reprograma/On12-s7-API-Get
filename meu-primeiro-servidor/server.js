const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

app.get("/", (request, response) => {
    response.status(200).json([{
        "nome": "oiiiiiiiii"
    }])
})