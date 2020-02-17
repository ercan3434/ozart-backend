const mongoClient= require("./mongo");
const jwt = require("jsonwebtoken")
const data = {};
const dbname = 'auth';
const dbcollection= 'users';
const ObjectId = require('mongodb').ObjectId;

data.getProducts = async (req, res, next) => {
    await mongoClient.db(dbname).collection("products").find({}).toArray()
    .then((data) => {
        res.json(data);
       }).catch((err) => {
           console.log("hata verdi");
       })   
};

data.getUsers = async (req, res, next) => {
    await mongoClient.db(dbname).collection("users").find({}).toArray()
    .then((data) => {
        res.json(data);
       }).catch((err) => {
           console.log("hata verdi");
       })   
};

data.categories= function(req,res,next){
   
    mongoClient.db(dbname).collection("categories").find({}).toArray()
    .then((data) => {
        res.json(data);
       }).catch((err) => {
           console.log("hata verdi");
       })   
   } 

   data.aksesuar= function(req,res,next){
   
    mongoClient.db(dbname).collection("products").find({categoryId:1}).project({}).toArray()
    .then((data) => {
        res.json(data);
       }).catch((err) => {
           console.log("hata verdi");
       })   
   } 

   data.giyim= function(req,res,next){
   
    mongoClient.db(dbname).collection("products").find({categoryId:2}).project({}).toArray()
    .then((data) => {
        res.json(data);
       }).catch((err) => {
           console.log("hata verdi");
       })   
   } 


data.login = async (req, res, next) => {
    let { name, password }=req.body;
    if(name, name!=='', password, password!==''){
        await mongoClient.db(dbname).collection(dbcollection).find({name,password}).project({}).toArray()
        .then((data) => {
            console.log({data});
            if(data.length>0){
                let payload = {subject: data._id}
                let token = jwt.sign(payload, 'secretKey')
                 res.json({token});
            }else{
                res.status(403);
                res.send({error:'Gecersiz parola veya kullanici adi'});
            }
           }).catch((err) => {
               console.log("hata verdi");
           })   
    }
}

data.register = async (req, res, next) => {
    
    let {name,lastName,email,adress,password}=req.body;

 await mongoClient.db(dbname).collection(dbcollection).insertOne({name,lastName,email,adress,password}).then((data) => {
    let payload = {subject: data._id}
    let token = jwt.sign(payload, 'secretKey')
     res.json({token});
    }).catch((err) => {
        console.log("hata verdi");
    });
};


module.exports = data;