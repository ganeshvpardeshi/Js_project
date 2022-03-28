var express = require('express');
var router = express.Router();
var User = require("./userSchema")


// FIRST Array :
const firstArray = [
  { firstName:"Ganesh", lastName:"Pardeshi" ,userName:"pardeshivganesh"},//0
  { firstName:"Manesh", lastName:"Pardeshi" ,userName:"maneshpardeshi"},//1
  { firstName:"Manoj", lastName:"chavan" ,userName:"manojchavan"},//2
  { firstName:"Kunal", lastName:"Nikam" ,userName:"nikamkunal"},//3
  { firstName:"Gaurav", lastName:"Hire" ,userName:"hiregaurav"}//4
]


//Operation on FIRST ARRAY 
router.get('/',getData);
router.post('/register',createData);
router.put('/:id',updateData);
router.delete('/delete/:id',deleteData);


function getData(req,res)
{
    try 
    {
        console.log("",firstArray);
        res.send({Message:"UsersDeails :",userData:firstArray});
    }
    catch(err)
    {
        console.log("Error in Get Method.");
        res.send("Something went wrong");
    }
}

function createData(req,res){

    try
    {
      const userData = req.body;
      console.log("",userData)
        
    const find = firstArray.find((item)=> item.userName === userData.userName);
    console.log("",find)

      if(find)
      {
        console.log("data repeated");
        res.send({Message:"The Given Data and UserName is already existed, Please change the credentials."})
      }
      else{
          firstArray.push(userData);
          console.log("",firstArray);
          res.send({Message:"The Data is Successfully Added."});
        }
    }
    catch(err)
    {
      console.log("Error");
    }
  }

function updateData(req,res)
{

      try{
          const UserName = req.params.id;
          const data = req.body;
          const idofObj = firstArray.find((item)=> item.userName === UserName);
          const index = firstArray.indexOf(idofObj);

          if(index>0)
          {
              firstArray[index].firstName = data.firstName;
              firstArray[index].lastName = data.lastName;

              if(data.userName || data.username)
              {
                  console.log("hiiganeu");
                  res.send({Message:`You cannot change UserName Credentials and Please Enter the FirstName and the LastName.`});
              }
              else{
                  console.log("",firstArray[index]);
                  res.send({Message:"Updated Userdetails",userData:firstArray[index]});
              }
          }
          else{
              res.send({Message:"Given Username is not in the DataBase. Enter Valid Username"})
          }
      }
      catch(err)
      {
          console.log("Error Update Method");
          res.send("Something went wrong");
      }
}
function deleteData(req,res)
{
    try 
    {
          const UserName = req.params.id;
          const idofObj = firstArray.find(function(item){
            return item.userName === UserName; 
          });

          const index = firstArray.indexOf(idofObj);
          
          if(index>0)
          {
              firstArray.splice(index,1);
              console.log("",idofObj);
              res.send({Message:"Deleted Data is :",Data:idofObj});
          }
          else{
              res.send({Message:"The Username not found in DataBase."});
          }
    }
    catch(err)
    {
      console.log("Error in Delete Method");
      res.send("Something went wrong.");

    }
}
 

module.exports = router;