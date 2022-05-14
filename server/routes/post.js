const Post = require("../model/post")
const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const posts = await Post.find();
        res.send(posts);
        console.log(posts);
    }
    catch(error){
        res.send(error)
    }
});


module.exports = router;