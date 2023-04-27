const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
name: { type: String, required: true },
movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],

});

const Categorie = mongoose.model('Categorie', categorieSchema);

module.exports = Categorie;