let express = require('express');
const profileModel = require('../models/profile');
const profile = require('../components/profile');
let router = express.Router();


router.post('/login',profile.loginGet);
router.post('/profileAdd',profile.profileAdd);

module.exports = router;