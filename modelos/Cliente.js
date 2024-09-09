const mongoose = require('mongoose');

//este modelo es el que se va a montar en postman

const clientesSchema = mongoose.Schema({

    nombre:{
        type: String,
        required:true
    },
    n_cedula:{
        type: Number,
        required:true
    },
    direccion: {
        type: String,
        required:true
    },
    telefono: {
        type: Number,
        required:true
    },
    edad: {
        type: Number,
        required:true
    },
    email: {
        type:String,
        required:true
    },
},{versionkey:false});

module.exports = mongoose.model('Cliente',clientesSchema);