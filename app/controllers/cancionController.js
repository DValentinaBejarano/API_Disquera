const cancion = require('../models/Cancion');

//Reciben los mismos parametros, req de request que permite manejar la petición
//response que permite responder al cliente 
function index(req,res){
    cancion.find({})
    .then(cancion => {
        if(cancion.length) return res.status(200).sed({cancion});
        return res.status(204).send({message: 'No hay ningun contenido'})
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.cancion) return res.status(200).send({cancion});
    return res.status(404).send({message: 'Página no encontrada'})
}

function create(req,res){
    new Cancion(req.body).save().then(cancion => res.status(201).send({cancion})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cancion) return res.status(404).send({message: 'Página no encontrada'});
    let canciones = req.body.cancion[0];
    canciones = Object.assign(canciones, req.body);
    canciones.save().then(canciones => res.status(200).send({message: 'Actualizado', canciones})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cancion) return res.status(404).send({message: 'Página no encontrada'});
    req.body.cancion[0].remove().then.(canciones => res.status(200).send({message: 'Eliminado', canciones})).catch(error => res.status(500).send({error}));
}
 
//Next: ejecuta la siguiente función
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cancion.find(query).then(cancion => {
        if(!cancion.length) return next();
        req.body.cancion = cancion;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })

}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}

