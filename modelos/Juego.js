const mongoose = require('mongoose');

//este modelo es el que se va a montar en postman

const juegosSchema = mongoose.Schema({

    nombre:{
        type: String,
        required:true
    },
    fechaCreacion:{
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required:true
    },
    jugadores: {
        type: Number,
        required:true
    },
    edad: {
        type: Number,
        required:true
    },
    consola: {
        type:String,
        required:true
    },
    precio: {
        type:String,
        required:true
    },
},{versionkey:false});

module.exports = mongoose.model('Juego',juegosSchema);