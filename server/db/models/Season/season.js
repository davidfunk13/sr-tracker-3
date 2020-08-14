const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    _battletag: { type: Schema.Types.ObjectId, ref: 'battletag' },
    startingTankSR: { type: Number, require: true },
    tankSR: { type: Number, require: true },
    preferredTanks: { type: [], validate: [preferredHeroLimit, '{PATH} exceeds the limit of three'] },
    startingDamageSR: { type: Number, require: true },
    damageSR: { type: Number, require: true },
    preferredDamage: { type: [], validate: [preferredHeroLimit, '{PATH} exceeds the limit of three'] },
    startingSupportSR: { type: Number, require: true },
    supportSR: { type: Number, require: true },
    preferredSupport: { type: [], validate: [preferredHeroLimit, '{PATH} exceeds the limit of three'] },
}, { timestamps: true });

function preferredHeroLimit(arr) {
    return arr.length <= 3
}

module.exports = mongoose.model('season', SeasonSchema);