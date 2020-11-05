const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BattletagSchema = new Schema({
    _user: {
        type: String,
        require: true,
    },
    id: {
        type: Number,
        required: true,
    },
    isPublic: {
        type: Boolean,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    playerLevel: {
        type: Number,
        required: true,
    },
    portrait: {
        type: String,
        required: true,
    },
    urlName: {
        type: String,
        required: true,
    },
    _sessions: [{
        type: Schema.Types.ObjectId,
        ref: 'session'
    }]
}, { timestamps: true });

module.exports = mongoose.model('battletag', BattletagSchema);