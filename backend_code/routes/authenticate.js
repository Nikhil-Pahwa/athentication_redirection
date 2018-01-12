var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    backURL = req.header('Referer') || '/';
    tokenId = '12345';
    res.redirect(backURL + 'callback' + '#' + tokenId);
});

module.exports = router;