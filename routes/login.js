// const express = require('express');
// const router = express.Router();
// const User = require("./userSchema")
// const encrypt = require("./passwordHash")
// // const html = require("../html/index")
// var nodemailer = require('nodemailer');


// router.post('/',loginUser);
// router.post('/forgetpass',forgetpass);
// // exports.forgetpass = [
//     const userEmail = req.body.email;
//     const userName =  req.body.username;
//     const userDetails = await User.findOne({userName:userName});
//     const Userdetails = await User.findOne({email:userEmail});
 
//     if(Userdetails!= null)
//     {   
//         if(Userdetails!= null)
//         {
//             var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//             user: 'captainkafollower01@gmail.com',
//             pass: '@Password?1'
//             }
//         });
        
//         var mailOptions = {
//             from: 'captainkafollower01@gmail.com',
//             to: Userdetails.email ,
//             subject: 'Sending Email using Node.js',
//             text: 'That was easy!'
//         };
        
//         transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//             console.log(error);
//             } else {
//             console.log('Email sent: ' + info.response);
//             }
//         });

//         res.send({Mssage:"The Password Recovery email is sent to your given email-id."});
//         }
//         else{
//             res.send({Message:"The Given Email or UserName is not in DataBase. Create the Account."});
//         }
//     }
//     else if(userName!= null)
//     {
//         if(userDetails!= null)
//         {
//             // console.log("hii ganesh ",userDetails);
//             console.log("jii");
//             var transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                   user: 'captainkafollower01@gmail.com',
//                   pass: '@Password?1'
//                 }
//               });
              
//               var mailOptions = {
//                 from: 'captainkafollower01@gmail.com',
//                 to: userDetails.email,
//                 subject: 'Sending Email using Node.js',
//                 text: 'That was easy!'
//               };
              
//               transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                   console.log(error);
//                 } else {
//                   console.log('Email sent: ' + info.response);
//                 }
//               });
        
//               res.send({Mssage:"The Password Recovery email is sent to your given email-id."});
//         }
//         else{
//             res.send({Message:"The Given Email or UserName is not in DataBase. Create the Account."});
//         }
//     }
//     else{
//         res.send({Message:"Please enter the your Email-id or username."});
//     }
// ]

// //login page
// // async function loginUser(req,res){
// exports.loginUser = [
//         try{
//             // const email = document.getElementById("username").value;
//             // const password = document.getElementById("password").value;
//             const email = req.email;
//             const password = req.password;
//             // const email = req.body.email;
//             // const password = req.body.password;

//             const userDetails = await User.findOne({email:email});
//             console.log(userDetails)
//             if(userDetails){

//                 const isValid = await encrypt.comparePassword(password,userDetails.password);
//                 if(isValid)
//                 {
//                     res.render('index', { title: 'Express' });
//                     console.log("",userName);
//                 }
//                 else{
//                     res.send({Message:"The Password Doesn't Match, Try Again."});
//                 }
//             }
//             else{
//                 console.log("hii error in if-else");
//                 res.send({Message:"Username and Password Not found. Please Enter Valid Credentials."});
//             }
//         }
//         catch(err)
//         {
//             console.log("Error in Login Page");
//         }
// // }
//     ]

// // module.exports = login;