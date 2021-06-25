// criar porta
// criar rota
// request
// enviar response

const { response } = require("express")
const express = require("express") // importando express
const app = express() // (instanciando) para o arquivo

app.get("/", (request, response) => {
    console.log('uma requisição foi realizada')
    response.status(200).json("oi?")

})

app.get('/jurema', (request,response) => {
    console.log('url jurema foi requerida')
    response.status(200).json([
    {
        "nome": "Jurema",
        "idade": "adulta"
    },
    {
        "dona": "Vitória",
        "tempo": "4 meses"
    }
    ])
})

// portas - 3000 6000 8080
app.listen(3000, () => {
    console.log('meu primeiro servidor rodando na porta 3000')
    console.log()
})

