import axios from 'axios';

const searchBattletags = async (req, res) => {

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
                [SEARCH_KEY_2]: `${SEARCH_VAL_2}${req.body.battletag}`,
                [SEARCH_KEY_3]: SEARCH_VAL_3,
                [SEARCH_KEY_4]: SEARCH_VAL_4,
                [SEARCH_KEY_5]: SEARCH_VAL_5
            }
        }

        const results = await axios.get(`${SEARCH_URL}${req.body.battletag}`, config)

        console.log(results.data)
        const status = !!results.data.length;

        res.json({success: status, data: results.data});

    } catch (err) {

        res.json({success: false, error: 'There was an error! Please check the server console.'});
    }
}

module.exports = searchBattletags;
