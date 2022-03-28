var express = require('express');
var router = express.Router();

/* GET users listing. */
                  // 00  01  02  03   04
const secondArray =[ 10, 12, 50, 420, 52];




//Operation on Second Array 

router.get('/',getData);
router.post('/register',createData);
router.put('/:id',updateData);
router.delete('/delete/:id',deleteData);


    
//Methods:
function getData(req,res)
{
    try{

      console.log("",secondArray);
      res.send({Message:"Userdetails",userData:secondArray});
    }
    catch(err)
    {
      console.log("Error Get Method");
      res.send("Something went wrong");
    }
}
function createData(req,res){
  try 
  {
      const userReq = req.body.userNumber ;
      let Jlength = Object.keys(userReq).length;

      for(let i=0;i<Jlength;i++)
      {
          secondArray.push(userReq[i]);
      }

      console.log("",secondArray);
      res.send({Message:"Updated Userdetails",userData:secondArray});
  }
  catch(err)
  {
      console.log("Error Insert Method");
      res.send("Something went wrong");
  }
}

//Update Method
function updateData(req,res)
{

      try{

          const userIndex = Number(req.params.id);
          const userData = Number(req.body.userdata);
        
          const id = secondArray.find((item)=> item === userIndex);
          console.log("",id);
          const index = secondArray.indexOf(id);
          console.log("",index);

          if(index>=0)  
          { 
            secondArray[index] = userData;
            console.log("",secondArray);
            res.send({Message:"Updated Array is",userData:secondArray});
          }
          else{
            res.send({Message:"The Given Value is not found in DataBase."});
          }
      }
      catch(err)
      {
        console.log("Error Update Method");
        res.send("Something went wrong");
      }
}
//delete Methods
function deleteData(req,res){

    try 
    {
      const userIndex = Number(req.params.id);
      const id = secondArray.find((item)=> item === userIndex);
      const index = secondArray.indexOf(userIndex);
      if(index>=0)
      { 
        secondArray.splice(index,1);
        res.send({Message:`Deleted Value is : ${id}`});
        console.log("",secondArray,"",index );
      }
      else{
        res.send({Message:"The Value Doesn't Match to DataBase Value."});
      }
    }
    catch(err)
    {
      console.log("Error in Delete Method");
      res.send("Something went wrong.");

    }
  }
module.exports = router;
