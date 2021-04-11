const mongoose = require('mongoose');
const login = mongoose.model('login');
module.exports.login = (req,res,next) =>{
  var user = new user();
  user.Fullname = req.body.Fullname;
  user.Address = req.body.Address;
  user.Mobileno = req.body.Mobileno;
  user.City = req.body.City;
  user.Emailid = req.body.Emailid;
  user.Username = req.body.Username;
  user.Password = req.body.Password;
  user.save((err,doc)=>{
      if(!err)
      res.send(doc);
      else 
      console.log(err);
  });


}