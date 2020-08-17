const mongoose = require('mongoose');
const mapDictionary = require('../../../utils/mapDictionary');

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: { type: String, require: true },
    heroKey: { type: String, require: true },
    roleKey: { type: Number, required: true },
    roleName: { type: String, required: true },
    subCategory: { type: String, required: true },
    icon: { type: String, required: true },
});

const GameSchema = new Schema({
    mapPlayed: { type: String, required: true },
    heroesPlayed: { type: [HeroSchema], maxlength: 3 },
    outcome: { type: Number, required: true },
    rankIn: { type: Number, required: true },
    rankOut: { type: Number, required: true },
}, { timestamps: true });

const mapEnum = mapDictionary.map(location => location.name);

console.log(mapEnum);

module.exports = mongoose.model('game', GameSchema);