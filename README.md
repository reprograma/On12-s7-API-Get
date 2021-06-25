# On12-TodasEmTech-s7-API-GET
Turma Online 12 | Back-end | 2021 | Introdução à API: GET

# Principais comando usados

**Para iniciar pela primeira um projeto com node.js**

```bash
npm init -y
```

**Para instalar dependências com npm**

```bash
npm install express
npm install nodemon
```

**Para rodar o servidor**

```bash
npm start
```

Quando usamos o nodemon devemos modificar nossos **scripts de start** dentro do **package.json**

````JavaScrypt
"start": "nodemon server.js"
````

**Para instalar dependências de um projeto com node.js que já foi iniciado**

```bash
npm install
```

## Demanda de Negócio

Dentro do trabalho de desenvolvimento de softwares é bem difícil que trabalhemos sozinhas e na maioria das vezes não seremos nós que decidiremos o que uma API vai fazer. Quando trabalhamos construindo APIs, muitas vezes as necessidades e demandas virão de pessoas não técnicas, serão seus clientes ou a área de negócio que dirão o que querem que sua API faça.

Retornar somente o nome e a sigla de cada estado

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

### [GET] "/estados/cidades/{sigla}"

Retorna somente as cidades de uma sigla especifica

---

# Para a casa!

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



![](https://media.giphy.com/media/1yjZXySg7tSohpcmUM/giphy.gif)
