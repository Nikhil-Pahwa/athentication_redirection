var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.headers['auth-token']) {
        return res.json({
            user_name: 'test user',
            role: 'ADMIN',
            company: 'ABC'
        });
    } else {
        res.send(401);
    }
});

module.exports = router;