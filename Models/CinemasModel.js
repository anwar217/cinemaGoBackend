const mongoose = require('mongoose');

const CinemaSchema = new mongoose.Schema({
name: { type: String, required: true },
longitude: { type: Number, required: true },
latitude: { type: Number, required: true },
altitude: { type: Number, required: true },
nombreSales: { type: Number, required: true },
salles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Salle' }],
ville: { type: mongoose.Schema.Types.ObjectId, ref: 'Ville', required: true },
});

export default mongoose.model('Cinema', CinemaSchema);;