const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const postSchema = new Schema({
    name: String,
    username: String,
    content: String,
    image: String,
    avatar: String
    
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);