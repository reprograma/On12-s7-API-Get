# Para casa!

Para casa ficam as seguintes rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

O exercício para casa devera ser feito dentro da pasta servidor-para-casa. Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

```bash
		\--📂 On11-TodasEmTech-s7-API-GET
			|
			\--📂meu-primeiro-servidor
			|
			\--📂meu-primeiro-servidor
			|				
			**\--📂servidor-para-casa
			    |   server.js
			    📂---data
			    |       estados-cidades.json**
```

Observe que o json de estados-cidades, está um pouco mais simples! **O foco desse exercício é que vocês consigam entender bem quais são os comandos necessários para criar um servidor com node.js**


//retornar lista completa de estados-cidades

	app.get("/estados/todos", (request, response)=>{ 
    	response
  		.status(200)
   		.send( estados.map(estado => {
       		let estados_e_cidades = {mensagem: "Estado e suas respectivas cidades:",
       		nome: estado.nome, cidades: estado.cidades}
       		return estados_e_cidades
  		 }))
	})

//retorna nome, sigla e cidades de uma sigla especifica

	app.get("/estados/:sigla", (request, response)=>{
    	let siglaRequerida = request.params.sigla.toLocaleUpperCase()
    	console.log(siglaRequerida);
    	response.status(200).send(estados.find(estado=> estado.sigla == siglaRequerida))
	})

