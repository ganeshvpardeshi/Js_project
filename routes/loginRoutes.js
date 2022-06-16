const express = require('express');
const router = express.Router();
const User = require("./userSchema")
const login = require("./login"); 

router.post('/',login.loginUser);
router.post('/forgetpass',forgetpass);

module.exports = router;