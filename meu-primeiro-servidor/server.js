<<<<<<< HEAD
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
=======
// criar porta OK
// criar rota OK
// http request OK
// enviar response OK

const { response } = require("express")
const express = require("express") // importando express
const app = express() // colocando express disponível para ser usado no arquivo (instanciando)

app.get("/", (request, response) => { // definindo uma rota
    console.log('Uma requisição foi realizada') // adicionar console pra verificar no terminal
    response.status(200).json("Salve! <3") // enviar um status 200 e enviar como resposta json
})

app.get("/jurema", (request, response) => {
    console.log('Url jurema foi requerida')
    response.status(200).json([
        {
            "nome": "Jurema",
            "idade": "adulta"
        },
        {
            "foto": "https://drive.google.com/file/d/15wN7afvLOWJAJBzGR6j9nn0q58b2fZ9l/view?usp=sharing"
        },
        {
            "dona": "Vitoria",
            "tempo": "4 meses"
        }
    ])
})

app.listen(3000, () => { // reservando a porta no meu computador para o servidor local
    console.log('Meu primeiro servidor rodando na porta 3000') // adicionar console para verificar no terminal
>>>>>>> ad403661bb5dbaa8635cdca168c681fc99a86902
})

