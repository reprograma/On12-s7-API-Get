const express = require("express")
const app = express()

app.get("/", (request, response) => {//definindo uma rota
    console.log('uma requisição foi realizada')//add console pra verificar no terminal
    //console.log('oi')
    response.status(200).json("Salve! <3")//enviar um status 200 e envia como resposta json
})

app.get("/jurema", (request, response)  => {
    console.log('Url jurema foi requerida')
    response.status(200).json([
    { 
         "nome": "jurema",
         "idade": "adulta"
    },  
    {

        "dona": "Vitoria",
        "tempo": "4 meses"
    }

    ])
})
app.listen(3000, () => {//reservando a porta no meu pc p o servidor local
     console.log('meu primeiro servidor rodando na porta 3000')//add console para verificar no terminal
})