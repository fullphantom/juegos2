const Cliente = require('../modelos/Cliente');

//funcion para agregar clientes

exports.agregarClientes = async(req,res) => {
    try {
        let clientes;
        clientes = new Cliente (req.body)
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

// funcion buscar clientes

exports.mostrarClientes = async(req,res)=>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al mostrar los clientes');
    }
}

// funcion buscar un cliente

exports.buscarCliente = async(req,res)=>{
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:'el cliente no se encuentra por ID'});
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un cliente');
    }
}

//funcion para modificar un cliente con metodo PUT

exports.modificarClientes = async(req,res)=>{
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body,{new:true});
        if(!clientes){
            res.status(404).send('cliente no encontrado');
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un cliente');
    }
}

// funcion editar un cliente con metodo PATCH

exports.editarCliente = async(req,res)=>{
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!clientes){
            res.status(404).send('el cliente no existe');
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar un cliente');
    }
}

// funcion eliminar un cliente con metodo DELETE

exports.eliminarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findById({_id: req.params.id});
        if(!clientes){
            res.status(404).send('el cliente no existe');
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:'el cliente fue eliminado con exito'});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un cliente');
    }
}