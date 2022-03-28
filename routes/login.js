const express = require('express');
const router = express.Router();
const User = require("./userSchema")
const encrypt = require("./validation")
const bcrypt = require('bcrypt');

router.post('/',loginUser);

async function loginUser(req,res){

        try{

            const email = req.body.email;
            const password = req.body.password;

            const userDetails = await User.findOne({email:email});
            console.log(userDetails)
            if(userDetails){

                const isValid = await encrypt.comparePassword(password,userDetails.password);
                if(isValid)
                {
                    res.render('index', { title: 'Express' });
                    console.log("",userName);
                }
                else{
                    res.send({Message:"The Password Doesn't Match, Try Again."});
                }
            }
            else{
                console.log("hii error in if-else");
                res.send({Message:"Username and Password Not found. Please Enter Valid Credentials."});
            }
        }
        catch(err)
        {
            console.log("Error in Login Page");
        }
}

module.exports = router;