var express = require('express');
var router = express.Router();

/* GET users listing. */

const secondArray =[ 10, 12, 50, 420, 52];




//Operation on Second Array 

router.get('/',function(req,res){
  console.log("",secondArray);
  res.send({Message:"Userdetails",userData:secondArray});
  // res.send(secondArray);
});

router.post('/register',createData);

function createData(req,res){

    try 
    {
        const userReq = Number(req.body);
        // const userIndex = req.params;
        const userIndex = Number(req.body);
        // const convertedData = JSON.stringify(userReq);
        console.log("0",typeof(userReq));
        console.log("1",userReq);

        // secondArray.splice(userIndex-1,0, userReq);
        for(let i=0;i<secondArray.length;i++)
        {
          if(userIndex == i)
          {
            console.log(i,"  ",userIndex);
            secondArray[i] = userReq;
          }
        }
        console.log("2",secondArray);
        res.send({Message:"Updated Userdetails",userData:secondArray});
    }
    catch(err)
    {
        console.log("Error");
    }
}
/* FIRST Array :
const firstArray = [
  { firstName:"Ganesh", lastname:"Pardeshi" },
  { firstName:"Manesh", lastname:"Pardeshi" },
  { firstName:"Gaurav", lastname:"Hire" }
]


//Operation on FIRST ARRAY 
 router.get('/', function(req, res) {
  res.send({Message:"Userdetails",userData:firstArray});
});

router.post('/register',createData);

function createData(res,req){

    try
    {
      const userData = req.body;
      const data = JSON.stringify(userData);
      console.log("11",typeof(userData));
      
      console.log("",data);
      firstArray.push(data);
      console.log("",firstArray);
      res.send({Message:"The Data is Successfully Added."});
    }
    catch(err)
    {
        console.log("Error");
    }
} */
module.exports = router;
