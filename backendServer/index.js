require('./config/config');
require('./models/db');

const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api',routes);
app.use((err,req,res,next)=>{
    if(err.name = 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(process.env.port || 4000,function(){
    console.log('server is started');
});