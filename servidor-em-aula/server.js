

const express = require("express") //importando o express p o doc
const app = express() //instanciando o express

// importart o arquivo json de filmes
const filmes = require("./data/ghibli.json")

//definir rota principal
app.get("/", (request, response) => {
response.status(200).send({"mensagem": "Salve! <3"})

})

app.get("/filmes", (request, response) => {//definindo a rota/filmes
response.status(200).send(filmes)//enviando os filmes como resposta

})

//definir um endpoint com id 
app.get("/filmes/:id", (request, response) => {
    //entender qual id o cliente esta requerindo
    const idRequisitado = request.params.id
    //console.log(request.params)
    console.log(idRequisitado)
    //entender o id de cada objeto da minha array
   // response.status (200).send("resposta")
   response.status (200).send(filmes.find(filme => filme.id == idRequisitado))

})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})