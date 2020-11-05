const axios = require('axios');

const jsdom = require('jsdom');

const Battletag = require('../../db/models/Battletag/battletag');

const heroes = require('../../utils/heroDictionary');

const { JSDOM } = jsdom;

async function getBattletagStats(input) {
    const { hero, _battletag, ruleset } = input;

    const currentBattletag = await Battletag.findById(_battletag);

    if (!currentBattletag) {
        console.log("Battletag not found to save data to.");
        return;
    }

    const selectedHero = heroes[hero];

    const selectedRuleset = ['quickplay', 'competitive'][ruleset];

    const info = {
        ruleset: selectedRuleset.charAt(0).toUpperCase() + selectedRuleset.slice(1),
        hero: selectedHero.name,
    }

    try {
        const bodyString = await (await axios.get(`https://playoverwatch.com/en-us/career/pc/${currentBattletag.urlName}`)).data;

        console.log(currentBattletag.urlName);

        const { document } = new JSDOM(bodyString).window;

        const compDiv = document.querySelector('#' + selectedRuleset);

        const compStats = compDiv.querySelectorAll("[data-category-id='" + selectedHero.heroKey + "']")[0];

        const statBlocks = compStats.querySelectorAll('div.card-stat-block');

        const statsObj = {};

        for (var i = 0; i < statBlocks.length; i++) {
            const categoryName = statBlocks[i].querySelector('h5.stat-title').textContent.toLowerCase().replace(' ', '_');

            const tableBodyData = statBlocks[i].querySelector('tbody').querySelectorAll('tr');

            const innerObj = {};

            for (var j = 0; j < tableBodyData.length; j++) {
                const title = tableBodyData[j].querySelectorAll('td')[0].textContent.toLowerCase().split(' - ')[0];

                const value = tableBodyData[j].querySelectorAll('td')[1].textContent;

                innerObj[title.split(' ').join('_')] = value;
            }

            statsObj[categoryName] = innerObj;
        }

        return { info: info, ...statsObj };

    } catch (err) {
        res.json({
            Info: info,
            Error: { "You probably havent played this hero in this ruleset yet! It's also possible that you've set your profile to private in game!": "" }
        });
    }
};

module.exports = getBattletagStats;