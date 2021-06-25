//passo 1- criar o arquivo do servidor
//passo 2- npm init
//passo 3- instalar express
//passo 4- instalou nodemon
//passo 5- atualizau o script do npm start
//passo 6- importar express para o documento
//passo 7- instanciando o express
//passo 8- definir uma porta para o servidor local
//passo 9- definir rota principal
//passo 10- definir rota secundária
//passo 11- importar o arquivo da rota secundária

const express = require('express')

const app = express() //instanciando o express

const filmes = require("./data/ghibli.json") // importar o arquivo json de filmes

app.get("/", (request, response)=> { 
    response.status(200).send({mensagem: "Salve! <3"}) //.send envia o arquivo como o programador configurar
})

app.get("/filmes", (request, response)=>{ //define a rota /filmes
    response.status(200).send(filmes) // envia os filmes como resposta
})
//qquery parameter
app.get("/filmes/title", (request, response)=>{
    const titleRequerido = request.query['title']
    console.log(titleRequerido)
    response.status(200).send(filmes.find(filme => filme.title.includes(titleRequerido)))
})
//parameter
app.get("/filmes/title/:title", (request, response)=>{
    const titleRequerido = request.params.title
    console.log(titleRequerido)
    response.status(200).send(filmes.find(filme => filme.title == titleRequerido))
})

//definir um endpoint com id
app.get("/filmes/:id",(request, response)=>{ // os : (dois pontos) após a barra indica o tipo de informação que o cliente irá requerer 
    //entender qual id o cliente está requerindo
    const idRequisitado = request.params.id //não é bom para busca em string, query é usado para string
    
    //entender o id de cada objeto do array
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado))

})



app.listen(3000, ()=>{ console.log("Servidor na porta 3000")}) // define uma porta para o servidor local