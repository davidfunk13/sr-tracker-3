const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    _battletag: { type: Schema.Types.ObjectId, ref: 'battletag' },
    startingTankSR: { type: Number, require: true },
    tankSR: { type: Number, require: true },
    startingDamageSR: { type: Number, require: true },
    damageSR: { type: Number, require: true },
    startingSupportSR: { type: Number, require: true },
    supportSR: { type: Number, require: true },
    _games: [{ type: Schema.Types.ObjectId, ref: 'game' }],
}, { timestamps: true });

module.exports = mongoose.model('season', SeasonSchema);