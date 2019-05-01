const axios = require('axios');
const env = require('env2');
env('./.env');

async function getTranslation(value) {
    const targetLanguage = 'es';
    const apiURL = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}&q=${value}&target=${targetLanguage}`;

    try {
        const response = await axios.get(apiURL);
        return response.data.data.translations[0];
    }
    catch(error) {
        console.error(error);
    }

    // res
    //  .status(200)
    // .render('home');
};

module.exports = getTranslation;