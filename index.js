const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./utils/config')
const logger = require('./utils/logger')

const Despesa = require('./models/despesa')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// Conectar ao MongoDB
mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Conectado ao MongoDB')
	})
	.catch((err) => {
		console.error('Erro ao conectar ao MongoDB:', err)
	})

// Rota para obter todas as despesas
app.get('/api/despesas', async (request, response) => {
	try {
		const despesas = await Despesa.find({})
		response.setHeader('Content-Type', 'application/json')
		response.json(despesas)
	} catch (error) {
		console.error('Erro na consulta ao MongoDB:', error)
		response.status(500).json({ error: 'Erro interno do servidor' })
	}
})

// Rota padrão
app.get('/', (req, res) => {
	res.send('Bem-vindo à minha aplicação com MongoDB!')
})


app.listen(config.PORT, () => {
	logger.info(`Server running on port ${config.PORT}`)
  })