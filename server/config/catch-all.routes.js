const router = require('express').Router();
const path = require('path');

router.all('*', function(req, res) {
    console.log('*** no such route, redirect to index ***', req.body);
    res.render(path.join(__dirname, '../../client/build'));
});

module.exports = router;