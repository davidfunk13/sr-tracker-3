const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    _battletag: { type: Schema.Types.ObjectId, ref: 'battletag' },
    tankSR: { type: Number, require: true },
    damageSR: { type: Number, require: true },
    supportSR: { type: Number, require: true },
},{ timestamps: true });

module.exports = mongoose.model('season', SeasonSchema);