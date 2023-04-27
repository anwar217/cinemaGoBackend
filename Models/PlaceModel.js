const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
numero: { type: Number, required: true },
longitude: { type: Number, required: true },
latitude: { type: Number, required: true },
altitude: { type: Number, required: true },
salle: { type: mongoose.Schema.Types.ObjectId, ref: 'Salle', required: true },
tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;