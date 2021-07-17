const express=require('express');
const router=express.Router();
const db=require('../db');
const jwt =require('jsonwebtoken');
const verify=require('./verifytoken')


router.post ('/login',async(req,res,next)=>{
    try{
        let result= await db.Login(req.body.username);
if (!result.length >0) return res.status(400).send("user not found");
if (!(result[0].password===req.body.password)) return res.status(400).send("password not found");
const token=jwt.sign({username:result[0].username},'oiuyhjklmnbvcxdfr');
res.send({ message:"success",
    islogin:true,
    Token:token});


    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});

router.get ('/',async(req,res,next)=>{
    try{
        let result= await db.all();
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.get ('/:id',async(req,res,next)=>{
    try{
        let result= await db.one(req.params.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.get ('/catone',async(req,res,next)=>{
    try{
        let result= await db.one(req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.post ('/',async(req,res,next)=>{
    
    try{
        let result= await db.insert(req.body.id,req.body.name,req.body.date);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.delete ('/',async(req,res,next)=>{
    try{
        let result= await db.delete(req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.put ('/',async(req,res,next)=>{
    try{
        let result= await db.put(req.body.name,req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.get ("/Categ/all",async(req,res,next)=>{
    try{
        let result= await db.catall();
res.json(result);
    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.post ('/categ',async(req,res,next)=>{
    
    try{
        let result= await db.catinsert(req.body.categuray,req.body.date);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.put ('/categ/update',async(req,res,next)=>{
    try{
        let result= await db.catput(req.body.categuray,req.body.date,req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.delete ('/categ/del',async(req,res,next)=>{
    try{
        let result= await db.catdelete(req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.get ("/post/all",async(req,res,next)=>{
    try{
        let result= await db.postall();
res.json(result);
    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.post ('/post/insert',async(req,res,next)=>{
    
    try{
        let result= await db.postinsert(req.body.depar,req.body.postitl,req.body.date,req.body.catid);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.put ('/post/updat',async(req,res,next)=>{ 
    try{
        let result= await db.postput(req.body.depar,req.body.postitl,req.body.date,req.body.catid,req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.delete ('/post/del',async(req,res,next)=>{
    try{
        let result= await db.postdelete(req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});



module.exports=router;