//criar porta - OK
//criar uma rota
//http requests
//enviar responseTime

const express = require("express") // importar o express

const app = express() //(instanciar) colocar o express disponível para ser usado no arquivo

app.get("/", (request, response)=> { 
    console.log("Uma requisição foi realizada");
    console.log("Oi!");
    response.status(200).json("Salve! <3")}) //.json envia a resposta no formato json

app.get("/milk",(request,response)=>{
    console.log('url milk foi requerida');
    response.status(200).json([
    {
        "nome": "Milk",
        "tipo:": "cachorro",
        "idade": "5 anos"
    },
    {
        "tutora": "Jezielle",
        "tempo": "5 anos"
    }
    ])
})
app.get("/vanilla",(request,response)=>{
    console.log('url vanilla foi requerida');
    response.status(200).json([
    {
        "nome": "Vanilla",
        "tipo:": "cachorro",
        "idade": "2 anos"
    },
    {
        "tutora": "Jezielle",
        "tempo": "2 anos"
    }
    ])
})

app.listen(3000, ()=>{ console.log("Meu primeiro servidor rodando na porta 3000");}) //definir a porta para rodar o servidor
//porta = espaço utilizado no computador para rodar um programa terceiro.
 
