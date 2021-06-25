//criar porta
//criar uma rota 
//http request
//enviar response

const express = require('express')
const app = express() // instanciando express(colocando ele disponivel no arquivo)

app.get("/", (request, response) => {

    console.log("Oi")
    response.status(200).json("Salve! <3")
})

app.get("/jurema", (request, response) => {
    console.log('Url jurema foi requerida')
    response.status(200).json([
        {
            "nome": "Jurema",
            "idade": "Adulta"
        },
        {
            "Dona": "Vitoria",
            "Tempo": "4 meses"
        }
    ])
})

//CRIAR PORTA PARA RODAR
app.listen(3000, () => {
    console.log('Meu primeiro servidor rodando na porta 3000, Aeeee')
}) 
