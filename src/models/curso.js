const mongoose = require('mongoose')
const Schema = mongoose.Schema

const curso = new Schema({
    idCurso: {
        type: Number,
        required: true,
        index: true
    },
    
    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String
    },

    valor: {
        type: Number
    },

    horas: {
        type: String
    },

    modalidad: {
        type: String,
        enum: {
            values: ['Virtual', 'Presencial']
        }
    },

    estado: {
        type: String,
        default: 'Disponible',
        enum: {
            values: ['Disponible', 'Cerrado']
        }
    }
},   
{
  collection: 'curso',
  toJSON: { virtuals: true },
  versionKey: false
})

module.exports = mongoose.model("curso", curso)