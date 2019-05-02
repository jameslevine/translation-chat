const express = require('express');

const home = require('./home');
const error = require('./error');
const apiTranslation = require('./api');
const language = require('./language');

const app = express();

const router = express.Router();


// GET
router.get ('/', home.get);

router.get ('/language', language.get);

router.get (/translate/, (req, res) => {

    const value = req.url.split('=')[1];
    
    const lang = req.url.split('=')[2];


    apiTranslation(value, lang)
    .then(translationData => {
        res.end(JSON.stringify(translationData));
        // res.render('home', { translationData });
    })
    .catch(err => {
        res.status(500).render('500');
    })
});

router.get ('*', error.client);
router.use(error.server);


module.exports = router;