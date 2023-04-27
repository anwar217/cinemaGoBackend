const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
nomClient: { type: String, required: true },
prix: { type: Number, required: true },
codePayment: { type: Number },
reserve: { type: Boolean, default: false },
place: { type: Schema.Types.ObjectId, ref: 'Place', required: true },
projection: { type: Schema.Types.ObjectId, ref: 'Projection', required: true }
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;