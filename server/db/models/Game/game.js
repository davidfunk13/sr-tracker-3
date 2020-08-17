const mongoose = require('mongoose');
const heroDictionary = require('../../../utils/heroList');

const Schema = mongoose.Schema;

heroDictionary.shift();

const heroes = heroDictionary.map(hero => hero.name);

const GameSchema = new Schema({
    role: { type: Number, required: true, enum: [0, 1, 2, 3] },
    _season: {type: Schema.Types.ObjectId, ref: "season", required: true},
    mapPlayed: { type: String, required: true },
    heroesPlayed: [{ type: String, required: true, enum: heroes }],
    outcome: { type: Number, required: true },
    rankIn: { type: Number, required: true },
    rankOut: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('game', GameSchema);