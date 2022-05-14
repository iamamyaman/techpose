const posts = require("./routes/post.js");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/posts',posts);

app.listen(8000,()=>{
    console.log("Listening to port no-8000")
});

mongoose.connect('mongodb+srv://amanSingh:Aman%40123@techpose-assignment.ia4t9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log("connection established"))
.catch((error)=>console.log(error))

