// const { body, validationResult ,checkSchema} = require('express-validator');
// const router = require('./login');

// // router.post(
// //   '/createUser',    
// //   // username must be an email
// //   body('firstName').isString(),
// //   body('lastName').isString(),
// //   body('userName').isString(),
// //   body('email').isEmail(),
// //   // password must be at least 5 chars long
// //   body('password').isLength({ min: 5 }),
// //   (req, res,) => {
// //     // Finds the validation errors in this request and wraps them in an object with handy functions
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// //     }

// //     // next();
// //   },
// // );

// const validation = {
//  CreateUser: function(){   
//       // username must be an email
//       body('firstName').isString(),
//       body('lastName').isString(),
//       body('userName').isString(),
//       body('email').isEmail(),
//       // password must be at least 5 chars long
//       body('password').isLength({ min: 5 }),
//       (req, res,) => {
//         // Finds the validation errors in this request and wraps them in an object with handy functions
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//           return res.status(400).json({ errors: errors.array() });
//         }

//         // next();
//     }
//   }
// }

// // const userRules ={

// //     createUser:checkSchema({

// //         firstName:{
// //             in:['body'],
// //             trime:true,
// //             isString:true
// //         },
// //         lastName:{
// //             in:['body'],
// //             trime:true,
// //             isString:true
// //         },
// //         userName: {
// //             in :['body'],
// //             trim : true,
// //             isString: true,
// //             isLength: {
// //                 options : {min : 6},
// //                 errorMessage : 'Username must be at least 6 character.'
// //             },
// //             errorMessage : "Please enter valid username."
// //         },
// //         email:{
// //             in:['body'],
// //             trim:true,
// //             isEmail:true,
// //             errorMessage:"Please enter valid Email."
// //         },
// //         password:{
// //             in:['body'],
// //             trim:true,
// //             errorMessage:"Please enter valid Password."
// //         },

// //     })
// // }

// module.exports = router;