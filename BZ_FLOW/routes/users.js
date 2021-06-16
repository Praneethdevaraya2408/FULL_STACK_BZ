var express = require('express');
var router = express.Router();
const userLib=require('../Backend/Lib/UserLib')
/* GET users listing. */
router.post('/login', function(req, res) {
  userLib.isUserValid(req.body, function(resultJson){
    res.json(resultJson);
})
});

module.exports = router;
