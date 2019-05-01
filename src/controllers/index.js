const express = require('express');

const home = require('./home');
const error = require('./error');
const apiTranslation = require('./api');

const app = express();

const router = express.Router();


// GET
router.get ('/', home.get);

router.get (/translate/, (req, res) => {
    apiTranslation()
    .then(result => {
        console.log('router: ', res);
        res.render('translation', { translationData: result});
    })
    .catch(err => {
        res.status(500).render('500');
    })
});

router.get ('*', error.client);
router.use(error.server);


module.exports = router;