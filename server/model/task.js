const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    pageName:{
        type:String,
        required:true
    },
    postCaption:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("task",postSchema);