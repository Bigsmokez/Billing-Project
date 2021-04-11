const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user');
const bodyParser = require('body-parser');
const Login = require('../models/login');


router.get('/login',function(req,res){
    res.send({type:'GET'});
});


router.post('/login',function(req,res){
    Login.create(req.body).then(function(login){
   
    res.send(login);
    
});
});

router.get('/loginuser',function(req,res){
    res.send({type:'GET'});
});




router.post('/loginuser',function(req,res){
    Login.findOne({Username:req.body.Username},function(err,data){
        
        if(err){
            res.json({success:false,message:"Error"});
            console.log(err)
        }
        else{
         res.json({ success:false, message:"Username"})
            console.log("login successfully");
        }
        
        
    });
    
});




/*
exports.login = (req,res) =>
{
    console.log('Username and Password :',req.body)
    Login.findOne({Fullname: req.body.Fullname},function(err,login){

        if(err){
            res.json({success:false,msg:"Error"})
            console.log(err)
        }
        else{
            res.json({ success:false, message:"Fullname"});
        }
       /* else{
            console.log("Password:"+req.body.Password)
            let Password = login.decrypt(login.Password);
        }
    })
}



*/
















module.exports = router;