const Task = require("../model/task")
const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.send(tasks);
        console.log(tasks);
    }
    catch(error){
        res.send(error)
    }
});


module.exports = router;