const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let user = models.User;
let coment = models.Comment;

app.post('/login',async (req,res)=>{
    let response= await user.findOne({
        where:{name:req.body.name, password:req.body.password}
    });
    if(response===null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/cadastro',async (req,res)=>{
    let response= await user.create({
        name:req.body.name, 
        cell:req.body.cell,
        password:req.body.password,
        admin:req.body.admin,
    });
});

app.post('/loginAdm',async (req,res)=>{
    let response= await user.findOne({
        where:{name:req.body.name, password:req.body.password, admin:1,}
    });
    if(response===null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('SERVIDOR INICIADO');
});
