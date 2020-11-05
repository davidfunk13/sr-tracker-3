const mongoose = require('mongoose');
const heroDictionary = require('../../../utils/heroList');

const Schema = mongoose.Schema;

heroDictionary.shift();

const heroes = heroDictionary.map(hero => hero.name);

const GameSchema = new Schema({
    role: { type: Number, required: true, enum: [0, 1, 2, 3] },
    _session: { type: Schema.Types.ObjectId, ref: "session", required: true },
    mapPlayed: { type: String, required: true },
    heroesPlayed: [{ type: String, required: true, enum: heroes }],
    outcome: { type: Number, required: true },
    rankIn: { type: Number, required: true },
    rankOut: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('game', GameSchema);