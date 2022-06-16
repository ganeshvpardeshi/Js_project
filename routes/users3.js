const express = require('express');
const router = express.Router();
const User = require("./userSchema")
const encrypt = require("./passwordHash")
const bcrypt = require('bcrypt');
const userRules = require("./forgetPass");

router.get('/',getDataUser);
router.get('/:id',getSingleUser);
router.post('/signup',createUser);
router.delete('/:id',deleteUser);
router.put('/:id',updateUser);

async function getDataUser(req,res)
{
    try{
          const user = await User.find();
          console.log("",user);
        res.send({Message:"UserDetails",Details:user});
      }
    catch(err)
    {
        console.log("Error in Get Method");
        res.send({Message:"Something went wrong."});
    }
}

async function getSingleUser(req,res)
{
        try{
                const userReq = req.params.id;

                const user = await User.findById(userReq);

                console.log("",user);
                res.send({Message:"Single Userdetails",Details:user});

        }
        catch(err)
        {
                console.log("Error in SingleGet Method");
                res.send({Message:"Something went Wrong"});
        }
}



async function createUser(req,res)
{
    try {
        const user = new User(req.body);
        const username = user.userName;

        const findUser = await User.findOne({userName:username});

        if(!findUser)
        {
            console.log("Data Successfully Added.");
            user.password = await encrypt.generateHashPass(user.password);
            console.log("Data sdsds Added.",user.password);

            await user.save();

            console.log("",user);
            res.send({Message:"The Data is Inserted Successfully.",Details:user});
        }
        else{
            console.log("I M Repeated.",findUser);
            res.send({Message:"The UserDetails are Repeated."})
        }
    }
    catch(err)
    {
          console.log("Error in Post Method");
          res.send({Message:"Something went wrong."});
    }    
}

async function updateUser(req,res)
{
        try{
                const userReq = req.params.id;
                const UserDetails = req.body;

                const findUser = await User.findOne({_id:userReq});
                if(findUser!=null)
                {
                    if(!(UserDetails.userName))
                    {
                        const user = await User.findByIdAndUpdate(userReq, {$set:UserDetails},{new : true});
                        console.log("",user);
                        res.send({Message:"Updated User-Details",Details:user});
                    }
                    else{
                        console.log("can't be update.");
                        res.send({Message:"The UserName Cannot be Update."});
                    }
                }
                else{
                    console.log("User is not in DataBase.");
                    res.send({Message:"The Given UserID is not found."});
                }
            
            }
        catch(err)
        {
            console.log("Error in Put Method.");
            res.send({Message:"Something Went Wrong."});
        }
}

async function deleteUser(req,res)
{
        try{

            const userReq = req.params.id;

            const user = await User.findByIdAndRemove(userReq);
            console.log("",user);
            res.send({Message:"The Data is Deleted Successfully.",Data:user});

        }
        catch(err)
        {
                console.log("Error in Delete Method");
                res.send({Message:"Something went Wrong"});
        }
}



module.exports = router;