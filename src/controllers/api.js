const axios = require('axios');
const env = require('env2');
env('./.env');

async function getTranslation(req, res) {
    const value = req.url.split('=')[1];
    const targetLanguage = 'es';
    const apiURL = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}&q=${value}&target=${targetLanguage}`;

    try {
        const response = await axios.get(apiURL);
        console.log('controller: ', response.data);
        return response.data;
    }
    catch(error) {
        console.error(error);
    }

    // res
    //  .status(200)
    // .render('home');
};

module.exports = getTranslation;