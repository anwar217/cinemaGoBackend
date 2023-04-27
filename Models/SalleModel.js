const mongoose = require('mongoose');
const { Schema } = mongoose;

const SalleSchema = new Schema({
name: { type: String, required: true },
nombrePlace: { type: Number, required: true },
cinema: { type: Schema.Types.ObjectId, ref: 'Cinema', required: true },
places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
projections: [{ type: Schema.Types.ObjectId, ref: 'Projection' }]
});

const Salle = mongoose.model('Salle', SalleSchema);

module.exports = Salle;

