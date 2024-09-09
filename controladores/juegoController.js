const Juego = require('../modelos/Juego');

//funcion para agregar juegos

exports.agregarJuegos = async(req,res) => {
    try {
        let juegos;
        juegos = new Juego (req.body)
        await juegos.save();
        res.json(juegos);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un juego');
    }
}

// funcion buscar juegos

exports.mostrarJuegos = async(req,res)=>{
    try {
        const juegos = await Juego.find();
        res.json(juegos);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al mostrar los juego');
    }
}

// funcion buscar un juego

exports.buscarJuego = async(req,res)=>{
    try {
        let juegos = await Juego.findById(req.params.id);
        if(!juegos){
            res.status(404).send({msg:'el juego no se encuentra por ID'});
        }else{
            res.json(juegos);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un juego');
    }
}

//funcion para modificar un juego con metodo PUT

exports.modificarJuegos = async(req,res)=>{
    try {
        const juegos = await Juego.findOneAndUpdate({_id: req.params.id}, req.body,{new:true});
        if(!juegos){
            res.status(404).send('juego no encontrado');
        }else{
            res.json(juegos);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un juego');
    }
}

// funcion editar un juego con metodo PATCH

exports.editarJuego = async(req,res)=>{
    try {
        const juegos = await Juego.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!juegos){
            res.status(404).send('el juego no existe');
        }else{
            res.json(juegos);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar un juego');
    }
}

// funcion eliminar un juego con metodo DELETE

exports.eliminarJuegos = async(req, res) => {
    try {
        const juegos = await Juego.findById({_id: req.params.id});
        if(!juegos){
            res.status(404).send('el juego no existe');
            return
        }
        await Juego.findOneAndDelete({_id: req.params.id});
        res.json({msg:'el juego fue eliminado con exito'});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un juego');
    }
}