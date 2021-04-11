const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    Fullname:{
        type:String
        
    },
    Address:{
        type:String
        
    },
    Mobileno:{
        type:Number
        
    },
    City:{
        type:String
        
    },
    Emailid:{
        type:String,Number
        
    },
    Username:{
            type:String
           
    },
    Password:{
        type:String
        
    }

});
  


 const Login = mongoose.model('login',LoginSchema);
 
 module.exports = Login;