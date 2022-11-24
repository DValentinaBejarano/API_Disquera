const mongoose = require('mongoose')

const cancionSchema = new mongoose.Schema({
    
        idCancion:{

        },

        nombreCancion: {
            type: String,
            unique: true,
            required: true
        },

        fechaGrabacion: {
            type: Date,
            required: true

        },

        duracionCancion: {

        },

        idAlbum: {

        },
        
        estadoCancion: {

        }
});

const cancion = mongoose.model('cancion', cancionSchema);
module.exports = cancion;