const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    _battletag: { type: Schema.Types.ObjectId, ref: 'battletag' },
    sessionRole: { type: Number, require: true, enum: [0, 1, 2] },
    skillRatingStart: { type: Number, require: true },
    skillRatingCurrent: { type: Number, require: true },
    _games: [{ type: Schema.Types.ObjectId, ref: 'game' }],
}, { timestamps: true });

module.exports = mongoose.model('session', SessionSchema);