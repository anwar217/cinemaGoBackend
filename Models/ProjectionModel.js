const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectionSchema = new Schema({
dateProjection: { type: Date, required: true },
prix: { type: Number, required: true },
salle: { type: Schema.Types.ObjectId, ref: 'Salle', required: true },
film: { type: Schema.Types.ObjectId, ref: 'Film', required: true },
tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
seance: { type: Schema.Types.ObjectId, ref: 'Seance', required: true }
});

const Projection = mongoose.model('Projection', ProjectionSchema);

module.exports = Projection;