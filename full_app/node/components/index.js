let express = require('express');
const profileModel = require('../models/profile');
const profile = require('../components/profile');
let router = express.Router();


router.post('/login',async(req,res)=> profile.loginGet(req,res));
router.post('/profileAdd',async(req,res)=> profile.profileAdd(req,res));

module.exports = router;