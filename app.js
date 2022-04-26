// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})


//http methods

app.get('/v1/explorers', (req,res)=>{

	console.log(`Api Explorers GET ALL request ${new Date()}`)

	
	const explorerOne = {id:1, name:"Woopa1"}
	const explorerTwo = {id:2, name:"Woopa2"}
	const explorerThree = {id:3, name:"Woopa3"}
	const explorerFour = {id:4, name:"Woopa4"}
	const explorers = [explorerOne,explorerTwo,explorerThree,explorerFour]
	res.status(200).json(explorers)
	
	
})

