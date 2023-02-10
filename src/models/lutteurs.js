const mongoose = require('mongoose');

const LutterSchema = new mongoose.Schema({
    nom : {type : String},
    prenom : {type : String},
    pseudonyme : {type : String},
    poids : {type : Number},
    images : {type : String},
});

const Lutter = mongoose.model('Lutter', LutterSchema)

module.exports =  Lutter 
