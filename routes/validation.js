const express = require('express');
// const router = express.Router();
// const User = require("./userSchema")
const bcrypt = require('bcrypt');


const encrypt= {
    generateHash : async function(password)
    {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        console.log(hashPassword);
        return hashPassword;
    },
    comparePassword : async function(password,hash)
    {
        return bcrypt.compare(password,hash);
    } 
}


module.exports = encrypt;