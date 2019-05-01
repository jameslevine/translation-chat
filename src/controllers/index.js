const express = require('express');

const home = require('./home');
const error = require('./error');
const apiTranslation = require('./api');

const app = express();

const router = express.Router();


// GET
router.get ('/', home.get);

router.get (/translate/, (req, res) => {

    const value = req.url.split('=')[1];
    
    apiTranslation(value)
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