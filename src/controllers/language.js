const languageData = require('../data/languageData.json');

exports.get = (req, res) => {
    res.json(languageData);
    // res.end(JSON.stringify(languageData));
};