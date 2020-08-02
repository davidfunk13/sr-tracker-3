const axios = require("axios");

const searchBattletags = async (battletag) => {

    try {
        const {
            SEARCH_URL,
            SEARCH_KEY_1,
            SEARCH_KEY_2,
            SEARCH_KEY_3,
            SEARCH_KEY_4,
            SEARCH_KEY_5,
            SEARCH_VAL_1,
            SEARCH_VAL_2,
            SEARCH_VAL_3,
            SEARCH_VAL_4,
            SEARCH_VAL_5
        } = process.env;


        const config = {
            headers: {
                [SEARCH_KEY_1]: SEARCH_VAL_1,
                [SEARCH_KEY_2]: `${SEARCH_VAL_2}${battletag}`,
                [SEARCH_KEY_3]: SEARCH_VAL_3,
                [SEARCH_KEY_4]: SEARCH_VAL_4,
                [SEARCH_KEY_5]: SEARCH_VAL_5
            }
        }

        const results = await axios.get(`${SEARCH_URL}${battletag}`, config)

        console.log(results.data);

        return results.data;

    } catch (err) {
        return []
    }
}

module.exports = searchBattletags;
