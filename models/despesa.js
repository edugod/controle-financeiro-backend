const mongoose = require('mongoose')

const despesaSchema = new mongoose.Schema({
	dia: { type: Date, required: true },
	valor: { type: Number, required: true },
	observacao: { type: String },
})
despesaSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('Despesa', despesaSchema)
