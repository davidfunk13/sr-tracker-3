const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BattletagSchema = new Schema({
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
    }
});

module.exports = mongoose.model('battletag', BattletagSchema);