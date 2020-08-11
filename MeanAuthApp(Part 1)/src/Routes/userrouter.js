const express=require("express")
const mongoose=require("mongoose")
const userInformation=require("./../Model/UserModel")
const router=express.Router()
const bcrypt=require("bcrypt-nodejs")
const jwt=require("jsonwebtoken")
const saltRounds=10

pass=""

router.get('/', async(req,res)=>{

    res.send("hey there")
//     try{
//   const mobile=await MobileInformation.find()
//   res.json(mobile)
//     }catch(err){
//        res.send("Error:"+ err)
//     }
  })

  router.post("/register", (req, res) => { 
     bcrypt.hash(req.body.password, 10).then(hash => {
    const user = userInformation({
      Username:req.body.username,
      Email:req.body.email,
      Password:hash
    });
    user.save()
      .then(result => {
        let payload={subject:result.email}
        let expiretime={ expiresIn: "1h" }
        const tokenstring=jwt.sign(payload,"mysecretKey",expiretime)
        
        res.status(201).json({
          message: "User created!",
          data: result,
          token:tokenstring
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});





router.post("/login", (req, res) => {
  let fetchedUser;

  userInformation.findOne({ Email: req.body.email })
   
  .then(user => {
      if (!user) {
        res.status(401).send("Invalid Email")
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.Password);
    })

    .then(result => {
      if (!result) {
        res.status(401).send("Invalid Password")
      }
      // const token = jwt.sign(
      //   { email: fetchedUser.email, userId: fetchedUser._id },
      //   "secret_this_should_be_longer",
      //   { expiresIn: "1h" }
      // );
      let payload={subject:fetchedUser.email}
      let expiretime={ expiresIn: "1h" }
      const tokenstring=jwt.sign(payload,"mysecretKey",expiretime)
      res.status(200).json({
        data: fetchedUser,
        token:tokenstring
      });
    })
    
    .catch(err => {
      res.status(200).send("Something went Wrong "+err)
    });
    });





 
  
  
  module.exports=router