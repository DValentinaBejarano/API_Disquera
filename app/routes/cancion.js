const express = require('express');
const cancionCtrl = require('../controllers/cancionController')

const Router = express.Router();

//Configurarlo - darle rutas y especificarle los metodos 
//Get: Obtener recursos, leerlos
//Post: Crearlos, publicarlos 
//Put: Actualizarlos, editarlos
//Delete: Eliminarlos

Router.get('/', cancionCtrl.index) //Index: Lista todo
      .post('/') //Create: Crea 
      .get('/:key/:value', cancionCtrl.find,cancionCtrl.show) //Show: Muestra de manera especifica 
      .put('/:key/:value', cancionCtrl.find,cancionCtrl.update) //Update: Actualiza de manera especifica 
      .delete('/:key/:value', cancionCtrl.find,cancionCtrl.remove);

//Exportar el router 
module.exports = Router;